const Configuration = require("openai")
const OpenAIApi = require("openai")

const configuration = new Configuration({
    organization: "org-HWoItxvInhy9K2zbhyEKUK8v",
    apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);
const response = await openai.listEngines();