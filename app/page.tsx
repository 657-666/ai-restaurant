"use client";

import { useState } from "react";

export default function Home() {
    const [message, setMessage] = useState("");
    const [answer, setAnswer] = useState("");
  return (
    <main className="min-h-screen bg-orange-50 flex flex-col items-center justify-center p-8">
      <h1 className="text-5xl font-bold text-orange-600 mb-6">
        🍽 AI私人美食顾问
      </h1>

      <p className="text-xl text-gray-700 mb-8">
        告诉我你的需求，我帮你寻找适合的餐厅
      </p>

      <div className="bg-white rounded-2xl shadow-lg p-6 w-full max-w-xl">

  <input
    className="w-full border rounded-xl p-4 text-lg mb-4"
    placeholder="例如：两个人约会，预算1000，想吃日料"
    value={message}
    onChange={(e) => setMessage(e.target.value)}
  />

  <button
  onClick={() =>
    setAnswer(
      `根据你的需求：${message}

推荐：

🍣 高评分餐厅

原因：
- 环境舒适
- 适合约会
- 人均500-1000元

推荐菜：
招牌料理`
    )
  }
  className="w-full bg-orange-500 text-white rounded-xl p-4 text-lg hover:bg-orange-600"
>
  开始推荐 🍴
</button>

</div>

      <div className="mt-10 grid gap-4 w-full max-w-xl">
        <div className="bg-white rounded-xl p-5 shadow">
          <h2 className="text-2xl font-bold">
            🍣 推荐示例
          </h2>
          <p className="mt-2 text-gray-600">
            高评分日料店 · 适合约会 · 人均500元
          </p>
        </div>
      {answer && (
  <div className="mt-8 bg-white rounded-xl shadow p-5 w-full max-w-xl">
    <h2 className="text-2xl font-bold mb-3">
      🤖 AI推荐
    </h2>

    <p className="whitespace-pre-line text-gray-700">
      {answer}
    </p>
  </div>
)}
      </div>
    </main>
  );
}