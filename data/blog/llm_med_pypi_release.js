export default {
  slug: "llm-med-pypi-release",
  title: "Announcing llm-med: A Lightweight Medical QA Language Model on PyPI",
  excerpt:
    "Excited to announce the release of llm-med v0.1.0 on PyPI - a transformer-based language model designed for medical question-answering.",
  date: "2026-01-08",
  author: "Sanjog Sigdel",
  thumbnail: "/images/blog-neuro.svg",
  content: `
    <h2>🎉 Introducing llm-med</h2>
    
    <p>I'm thrilled to announce the release of <strong>llm-med</strong> version 0.1.0 on PyPI! This package represents a significant milestone in making medical AI more accessible to researchers and developers.</p>
    
    <h3>What is llm-med?</h3>
    
    <p>llm-med is a lightweight medical question-answering language model built on a custom GPT-based transformer architecture. Trained on the MedQuAD dataset, it's specifically optimized for understanding and responding to medical domain questions.</p>
    
    <h3>🚀 Key Features</h3>
    
    <ul>
      <li><strong>Custom GPT Architecture</strong>: Lightweight transformer model designed specifically for medical QA</li>
      <li><strong>Medical Domain Expertise</strong>: Trained on MedQuAD dataset with comprehensive medical terminology</li>
      <li><strong>Fast Inference</strong>: Optimized for quick medical question answering</li>
      <li><strong>Flexible & Easy to Use</strong>: Simple to fine-tune on your own medical datasets</li>
      <li><strong>Lightweight Design</strong>: Small model size suitable for edge deployment</li>
    </ul>
    
    <h3>📦 Installation</h3>
    
    <p>Getting started is as simple as:</p>
    
    <pre><code>pip install llm-med</code></pre>
    
    <h3>💡 Quick Example</h3>
    
    <pre><code>from inference.generator import MedicalQAGenerator
from model.architecture import GPTTransformer
from model.configs.model_config import get_small_config

# Load model
config = get_small_config()
model = GPTTransformer(config)

# Create generator
generator = MedicalQAGenerator(
    model=model,
    tokenizer_path='path/to/tokenizer.model'
)

# Generate answer
question = "What are the symptoms of diabetes?"
answer = generator.generate(
    prompt=question,
    max_length=100,
    temperature=0.7
)

print(f"Q: {question}")
print(f"A: {answer}")</code></pre>
    
    <h3>🎯 Model Variants</h3>
    
    <p>llm-med comes in three sizes to suit different use cases:</p>
    
    <ul>
      <li><strong>Tiny</strong> (~2M parameters): Perfect for testing and development</li>
      <li><strong>Small</strong> (~10M parameters): Recommended for most applications</li>
      <li><strong>Medium</strong> (~50M parameters): Higher quality responses for production use</li>
    </ul>
    
    <h3>🔗 Resources</h3>
    
    <ul>
      <li><strong>PyPI Package</strong>: <a href="https://pypi.org/project/llm-med/" target="_blank">https://pypi.org/project/llm-med/</a></li>
      <li><strong>GitHub Repository</strong>: <a href="https://github.com/sigdelsanjog/medllm" target="_blank">https://github.com/sigdelsanjog/medllm</a></li>
      <li><strong>Documentation</strong>: <a href="https://github.com/sigdelsanjog/medllm#readme" target="_blank">README</a></li>
    </ul>
    
    <h3>⚠️ Important Note</h3>
    
    <p>This model is designed for research and educational purposes only. It should NOT be used for actual medical diagnosis or treatment decisions. Always consult qualified healthcare professionals for medical advice.</p>
    
    <h3>🙏 What's Next?</h3>
    
    <p>This is just the beginning! I'm excited to continue improving llm-med with:</p>
    
    <ul>
      <li>Enhanced model performance and accuracy</li>
      <li>Additional pre-trained checkpoints</li>
      <li>More comprehensive documentation and tutorials</li>
      <li>Integration with popular medical datasets</li>
      <li>Community contributions and feedback</li>
    </ul>
    
    <h3>🤝 Get Involved</h3>
    
    <p>I'd love to hear your feedback and see how you use llm-med in your projects! Feel free to:</p>
    
    <ul>
      <li>Open issues or discussions on <a href="https://github.com/sigdelsanjog/medllm/issues" target="_blank">GitHub</a></li>
      <li>Submit pull requests with improvements</li>
      <li>Share your use cases and experiences</li>
    </ul>
    
    <p>Thank you for your interest in llm-med. I hope this tool helps advance medical AI research and makes it more accessible to everyone!</p>
    
    <p><em>Happy coding! 🏥💻</em></p>
  `,
};
