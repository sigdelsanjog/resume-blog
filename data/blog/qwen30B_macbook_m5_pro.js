export default {
    slug: 'qwen30B_macbook_m5_pro',
    title: 'Qwen3-30B: Large Language Models running localhost in Macbook M5 Pro',
    excerpt: 'A step by step guide to running Qwen3-30B LLM on your local Macbook M5 Pro for research and development.',
    date: '2026-11-25',
    thumbnail: '/images/blog-qwen.svg',
    author: "Sanjog Sigdel",
    content: `
    <h2>System Configuration</h2>
    
    <p><strong>Hardware Configuration:</strong></p>
    <ul>
        <li>MacBook Pro M5 (14-inch, 2023)</li>
        <li>Chip: Apple M5 Chip with 8-core CPU and 10-core GPU</li>
        <li>Memory: 32GB Unified Memory</li>
        <li>Storage: 1TB SSD</li>
    </ul>

    <p><strong>Software Configuration:</strong></p>
    <ul>
        <li>LM Studio Version: 0.5.9 (latest stable)</li>
        <li>VS Code Version: 1.85.0 (latest stable)</li>
        <li>Operating System: macOS Sonoma 14.2</li>
    </ul>

    <p><strong>Model Specifications:</strong></p>
    <ul>
        <li>Language Model: Qwen3-30B (30 billion parameters)</li>
        <li>Actual Download Size: ~6GB (Q4_K_M quantization)</li>
        <li>Estimated Memory Consumption: 12-15GB RAM when running</li>
    </ul>

    <h2>Installation Guide for Qwen3 30B Model with LM Studio and VS Code</h2>
    
    <p>This guide provides step-by-step instructions to set up the Qwen3 30B parameter model from LM Studio and configure it for use with VS Code Copilot SDK.</p>

    <h3>Step 1: Download and Install LM Studio</h3>
    <ul>
        <li>Visit https://lmstudio.ai/ to download LM Studio for Mac</li>
        <li>Install LM Studio by dragging the application to your Applications folder</li>
        <li>Launch LM Studio after installation</li>
    </ul>

    <h3>Step 2: Download Qwen3 30B Model</h3>
    <ol>
        <li>In LM Studio, click on "Models" in the left sidebar</li>
        <li>Click "+ Add Model" or "Download Model"</li>
        <li>Search for "Qwen3 30B" or use the model ID if known</li>
        <li>Select the appropriate quantization (e.g., Q4_K_M, Q5_K_M)</li>
        <li>Download and install the model to your local machine</li>
    </ol>

    <h3>Step 3: Configure LM Studio Server</h3>
    <p>Once downloaded, select the Qwen3 30B model from your models list:</p>
    <ul>
        <li>Click "Start Server" for this model</li>
        <li>The server should start on http://localhost:1234/v1 (default port)</li>
        <li>You can verify by checking if the API endpoint responds:</li>
    </ul>
    <pre><code>curl http://localhost:1234/v1/models</code></pre>

    <h3>Step 4: Verify Local Model Setup</h3>
    <p>Open a terminal and run:</p>
    <pre><code>curl -X GET http://localhost:1234/v1/models</code></pre>
    <p>You should see your Qwen3 model listed in the response.</p>
    
    <p>Test with a simple inference call:</p>
    <pre><code>curl -X POST http://localhost:1234/v1/completions \\
  -H "Content-Type: application/json" \\
  -d '{
    "model": "qwen3-30b",
    "prompt": "Hello, how are you?",
    "max_tokens": 50
  }'</code></pre>
  <p>If the model responds correctly, your local setup is working! If the model is not responding you need to load the model manaully from your terminal by typing this commend:
  <pre><code>lms load qwen3-coder-30b-a3b-instruct --context-length 24576 --gpu max! Multiple models match the provided model key. Please select one.
  <br/>  ✔ Select a model to load | qwen3-coder-30b-a3b-instruct
  <br/>Model loaded successfully in 4.58s. (13.58 GiB) 
  <br/>  To use the model in the API/SDK, use the identifier "qwen3-coder-30b-a3b-instruct".
  </code></pre></p>

    <h3>Step 5: Configure VS Code for LM Studio Integration</h3>
    <ul>
        <li>Install the Copilot extension in VS Code if not already installed</li>
        <li>Open VS Code settings (Cmd/Ctrl + ,)</li>
        <li>Navigate to "Copilot" settings or search for "copilot"</li>
        <li>Look for local model configuration options</li>
        <li>Set your endpoint URL as: http://localhost:1234/v1</li>
        <li>Ensure the correct model name is specified in Copilot settings</li>
    </ul>

    <h3>Step 6: Test Integration with VS Code</h3>
    <ul>
        <li>Open a file in VS Code that supports AI features</li>
        <li>Try using Copilot suggestions or chat functionality</li>
        <li>If everything is configured correctly, you should see responses from your local Qwen3 model</li>
        <li>Check the status bar to confirm it's using your local model instead of remote API</li>
    </ul>

    <h3>Step 7: Troubleshooting Common Issues</h3>
    <ul>
        <li><strong>Issue:</strong> Model not starting - Ensure sufficient RAM and disk space</li>
        <li><strong>Issue:</strong> Connection refused - Verify LM Studio is running on correct port</li>
        <li><strong>Issue:</strong> Incorrect model name - Double-check the exact model identifier in LM Studio</li>
        <li><strong>Issue:</strong> Slow responses - Consider using lower quantization or reducing context length</li>
    </ul>

    <h3>Step 8: Additional Configuration Options (Optional)</h3>
    <p>For enhanced performance:</p>
    <ul>
        <li>Adjust memory allocation for LM Studio server</li>
        <li>Configure batch processing settings if available</li>
        <li>Set appropriate timeouts and connection limits</li>
        <li>Monitor resource usage through system monitors</li>
    </ul>

    <h3>Conclusion</h3>
    <p>With this setup, you now have a powerful local LLM running on your Macbook M5 Pro. This allows for privacy-focused development, faster response times, and reduced dependency on cloud services.</p>
  `,
};