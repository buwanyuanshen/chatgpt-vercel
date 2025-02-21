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
    APITemperature: 0.5,
    continuousDialogue: true,
    model: "gpt-3.5-turbo-0125" as SimpleModel
  },
  CLIENT_DEFAULT_MESSAGE: `Powered by OpenAI
- 如果本项目对你有帮助，可以推给其他需要帮助的人❤️❤️❤️！
- 本网站仅提供短期免费使用（多种模型可供选择），可填入自己的APIKey使用.
- 本人所属其余网址：[Gemini Pro](http://ccfgpt.cn)，[Gemini Plus](http://66.ccf666.cn)，[ChatGPT-3.5](http://6.ccfgpt.cn)，[ChatGPT-3.5-NextWeb](http://ccf666.cn)，[ChatGPT-3.5-16k](http://6.ccf666.cn)，[ChatGPT-4.0-32k](http://66.supergpt.shop)，[ChatGPT-4.0-NextWeb](http://chatpro.icu)，[ChatGPT-Plugins](http://6.supergptt.shop)，[ChatGPT-4.0-turbo](http://6.chatpro.icu)，[ChatGPT-Pro](http://66.chatpro.icu).
- 在输入框里输入[[/]][[/]]或[[空格]][[空格]]切换对话，[[Shift]]+[[Enter]]换行，输入[[/]]或[[空格]]搜索Prompt预设，输入[[↑]]编辑最近一次提问。
- 感兴趣的小伙伴可加入[q群226848325](http://qm.qq.com/cgi-bin/qm/qr?_wv=1027&k=1OOigjF5hxHUSQ5GE5U2UOIwswuckYOe&authKey=2pdTkM0NqehD2OuMojvBMnsmCAUcD6oO3ttDzS5CNle8tnre1a9Jp30aJZVUnC2c&noverify=0&group_code=226848325)学习交流~！
`,
  CLIENT_MAX_INPUT_TOKENS: {
    "gpt-3.5-turbo-0301": 4 * 1000,
    "gpt-3.5-turbo-0613": 4 * 1000,
    "gpt-3.5-turbo-1106": 4 * 1000,
    "gpt-3.5-turbo-0125": 4 * 1000,
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
