import { HumanMessage } from '@langchain/core/messages';
import { ChatOpenAI } from "@langchain/openai";
import { createClient, SupabaseClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';
import fs from 'fs';
import path from 'path';
import { array, number, z } from 'zod';
import { Database, Json } from './types/supabase';
import * as util from 'util';
import { globSync } from 'glob';
import { Receipt } from './zod';
import { OPENAI_API_KEY, SUPABASE_KEY, SUPABASE_URL, visionPrompt } from './const';

const readdir = util.promisify(fs.readdir);
const stat = util.promisify(fs.stat);
const prompt = visionPrompt

// Initialize Supabase client
dotenv.config({ path: path.resolve(__dirname, '../.env') });


const supabase: SupabaseClient = createClient<Database>(SUPABASE_URL, SUPABASE_KEY, { db: { schema: 'public' } });

// Define types

// Initialize OpenAI model
const model = new ChatOpenAI({
    model: "gpt-4o",
    temperature: 0,
    apiKey: OPENAI_API_KEY
});



type ReceiptType = z.infer<typeof Receipt>;

const structuredLlm = model.withStructuredOutput(Receipt);

async function imageModel(inputs: { image: string, prompt: string }): Promise<ReceiptType> {
    const imageData = await fs.readFileSync(inputs.image);

    const message = new HumanMessage({
        content: [
            {
                type: "text",
                text: inputs.prompt,
            },
            {
                type: "image_url",
                image_url: {
                    url: `data:image/jpeg;base64,${imageData.toString("base64")}`,
                },
            },
        ],
    });

    const res: ReceiptType = await structuredLlm.invoke([message]);
    //console.log({ res });
    return res;
}




function getJpgFiles(dir: string): string[] {
    console.log("THIS 4:", dir)
    let files = globSync(`${dir}/*.jpg`);
    return files
}


(async () => {
    const inputDir = path.join(__dirname, './input');



    try {
        const files = getJpgFiles(inputDir)
        files.forEach((file) => {
            processImage(file);
            console.log(`Finished processing file: ${file}`);
        })
    } catch (error) {
        console.error('Error processing images:', error);
    }
})();

