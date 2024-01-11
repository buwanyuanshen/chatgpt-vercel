import type { SimpleModel } from "./types"

/**
 * 用于创建 .env.example 文件，不要直接填写敏感信息。
 * 以 CLIENT_ 开头的变量会暴露给前端
 */
export const defaultEnv = {
  CLIENT_GLOBAL_SETTINGS: {
    APIKey: "",
    password: "",
    enterToSend: true
  },
  CLIENT_SESSION_SETTINGS: {
    title: "",
    saveSession: true,
    // 0-2
    APITemperature: 0.3,
    continuousDialogue: true,
    model: "gpt-3.5-turbo-1106" as SimpleModel
  },
  CLIENT_DEFAULT_MESSAGE: `Powered by OpenAI
- 如果本项目对你有帮助，可以推给其他需要帮助的人❤️❤️❤️！
- 本网站仅提供短期免费使用（仅支持ChatGPT-3.5所有模型），如余额不足，请填入自己的APIKey使用.
- [本人博客](https://6.ccfgpt.cn)，持续更新文章！
- 本人所属其余chat网址：[ChatGPT-4.0](https://chatpro.icu)，[ChatGPT-3.5](https://ccf666.cn)，[Gemini Pro](https://ccfgpt.cn).
- 感兴趣的小伙伴可加入[q群226848325](http://qm.qq.com/cgi-bin/qm/qr?_wv=1027&k=1OOigjF5hxHUSQ5GE5U2UOIwswuckYOe&authKey=2pdTkM0NqehD2OuMojvBMnsmCAUcD6oO3ttDzS5CNle8tnre1a9Jp30aJZVUnC2c&noverify=0&group_code=226848325)学习交流！！！
`,
  CLIENT_MAX_INPUT_TOKENS: {
    "gpt-3.5-turbo-0301": 4 * 1000,
    "gpt-3.5-turbo-0613": 4 * 1000,
    "gpt-3.5-turbo-1106": 4 * 1000,
    "gpt-3.5-turbo": 4 * 1000,
    "gpt-3.5-turbo-16k": 16 * 1000,
    "gpt-3.5-turbo-16k-0613": 16 * 1000,
    "gpt-4": 8 * 1000,
    "gpt-4-1106-preview": 128 * 1000,
    "gpt-4-32k": 32 * 1000,
    "gpt-4-32k-0314": 32 * 1000,
    "gpt-4-32k-0613": 32 * 1000
  } as Record<SimpleModel, number>,
  OPENAI_API_BASE_URL: "api.openai.com",
  OPENAI_API_KEY: "",
  TIMEOUT: 30000,
  PASSWORD: "",
  SEND_KEY: "",
  SEND_CHANNEL: 9,
  NO_GFW: false
}

export type SessionSettings = typeof defaultEnv.CLIENT_SESSION_SETTINGS
