import React, { useState } from "react";

function encrypt(text) {
  // Base64 encoding for shorter, URL-safe strings
  return btoa(unescape(encodeURIComponent(text)));
}

const Encrypt = () => {
  const [input, setInput] = useState("");
  const [name, setName] = useState("");
  const [url, setUrl] = useState("");

  const handleEncrypt = () => {
    const encrypted = encrypt(input);
    const encryptname = encrypt(name);
    const encoded = encodeURIComponent(encrypted);
    const encodedName = encodeURIComponent(encryptname);
    const fullUrl = `${window.location.origin}/?desc=${encoded}&name=${encodedName}`;
    setUrl(fullUrl);
  };

  return (
    <div className="flex flex-col items-center gap-4 p-6">
      <input
        type="text"
        value={name} 
        onChange={e => setName(e.target.value)}
        placeholder="Enter plant name"
        className="border rounded px-3 py-2 w-80"
      />
       <input
        type="text"
        value={input}
        onChange={e => setInput(e.target.value)}
        placeholder="Enter plant description"
        className="border rounded px-3 py-2 w-80"
      />
      <button
        onClick={handleEncrypt}
        className="bg-green-600 text-white px-4 py-2 rounded"
      >
        Encrypt & Generate URL
      </button>
      {url && (
        <div className="mt-4 break-all">
          <span className="font-semibold">Generated URL:</span>
          <div className="text-blue-700">{url}</div>
        </div>
      )}
    </div>
  );
};

export default Encrypt;