module.exports = {
  md: [
    {
      type: "category",
      label: "Getting Started",
      items: ["getting-started"],
      collapsed: false,
    },
    {
      type: "category",
      label: "Evaluation",
      items: [
        "evaluation-introduction",
        "evaluation-test-cases",
        "evaluation-datasets",
        {
          type: "category",
          label: "Synthesizer",
          items: [
            "synthesizer-introduction",
            "synthesizer-generate-from-docs",
            "synthesizer-generate-from-contexts",
            "synthesizer-generate-from-scratch",
          ],
        },
        {
          type: "category",
          label: "Metrics",
          items: [
            "metrics-introduction",
            "metrics-llm-evals",
            "metrics-prompt-alignment",
            "metrics-answer-relevancy",
            "metrics-faithfulness",
            "metrics-contextual-precision",
            "metrics-contextual-recall",
            "metrics-contextual-relevancy",
            "metrics-json-correctness",
            "metrics-tool-correctness",
            "metrics-summarization",
            "metrics-hallucination",
            "metrics-bias",
            "metrics-toxicity",
            "metrics-ragas",
            "metrics-custom",
            {
              type: "category",
              label: "Conversational Metrics",
              items: [
                "metrics-conversational-g-eval",
                "metrics-role-adherence",
                "metrics-knowledge-retention",
                "metrics-conversation-completeness",
                "metrics-conversation-relevancy",
              ],
              collapsed: true,
            },
            {
              type: "category",
              label: "Multimodal Metrics",
              items: [
                "multimodal-metrics-image-coherence",
                "multimodal-metrics-image-helpfulness",
                "multimodal-metrics-image-reference",
                "multimodal-metrics-text-to-image",
                "multimodal-metrics-image-editing",
                "multimodal-metrics-answer-relevancy",
                "multimodal-metrics-faithfulness",
                "multimodal-metrics-contextual-precision",
                "multimodal-metrics-contextual-recall",
                "multimodal-metrics-contextual-relevancy",
              ],
              collapsed: true,
            },
          ],
          collapsed: false,
        },
        {
          type: "category",
          label: "Benchmarks",
          items: [
            "benchmarks-introduction",
            "benchmarks-mmlu",
            "benchmarks-hellaswag",
            "benchmarks-big-bench-hard",
            "benchmarks-drop",
            "benchmarks-truthful-qa",
            "benchmarks-human-eval",
            "benchmarks-squad",
            "benchmarks-gsm8k",
            "benchmarks-math-qa",
            "benchmarks-logi-qa",
            "benchmarks-bool-q",
            "benchmarks-arc",
            "benchmarks-bbq",
            "benchmarks-lambada",
            "benchmarks-winogrande",
          ],
          collapsed: true,
        },
      ],
      collapsed: false,
    },
    {
      type: "category",
      label: "Red-Teaming",
      items: [
        "red-teaming-introduction",
        "red-teaming-owasp",
        "red-teaming-attack-enhancements",
        {
          type: "category",
          label: "Vulnerabilties",
          items: [
            "red-teaming-vulnerabilities",
            "red-teaming-vulnerabilities-bias",
            "red-teaming-vulnerabilities-misinformation",
            "red-teaming-vulnerabilities-toxicity",
            "red-teaming-vulnerabilities-illegal-activities",
            "red-teaming-vulnerabilities-personal-safety",
            "red-teaming-vulnerabilities-pii-leakage",
            "red-teaming-vulnerabilities-prompt-leakage",
            "red-teaming-vulnerabilities-unauthorized-access",
            "red-teaming-vulnerabilities-intellectual-property",
            "red-teaming-vulnerabilities-excessive-agency",
            "red-teaming-vulnerabilities-robustness",
            "red-teaming-vulnerabilities-graphic-content",
            "red-teaming-vulnerabilities-competition",
          ],
          collapsed: false,
        },
      ],
      collapsed: false,
    },
    {
      type: "category",
      label: "Guides",
      items: [
        "guides-rag-evaluation",
        "guides-using-custom-llms",
        "guides-using-synthesizer",
        "guides-optimizing-hyperparameters",
        "guides-regression-testing-in-cicd",
        "guides-building-custom-metrics",
        "guides-llm-observability",
        "guides-red-teaming",
        "guides-answer-correctness-metric",
        "guides-rag-triad",
        "guides-using-custom-embedding-models",
      ],
      collapsed: false,
    },
    {
      type: "category",
      label: "Integrations",
      items: [
        "integrations-introduction",
        "integrations-llamaindex",
        "integrations-huggingface",
      ],
      collapsed: true,
    },
    {
      type: "category",
      label: "Others",
      items: ["data-privacy"],
      collapsed: false,
    },
  ],
  confidentAI: [
    "confident-ai-introduction",
    {
      type: "category",
      label: "Evaluation & Testing",
      items: [
        "confident-ai-testing-n-evaluation-experiments",
        "confident-ai-testing-n-evaluation-test-run",
      ],
      collapsed: true,
    },
    {
      type: "category",
      label: "Hyperparameters",
      items: ["confident-ai-hyperparameters-prompt-versioning"],
      collapsed: true,
    },
    {
      type: "category",
      label: "Datasets",
      items: [
        "confident-ai-evaluation-dataset-management",
        "confident-ai-evaluation-dataset-evaluation",
      ],
      collapsed: true,
    },
    {
      type: "category",
      label: "LLM Observability",
      items: [
        "confident-ai-llm-monitoring",
        "confident-ai-llm-monitoring-conversations",
        "confident-ai-llm-monitoring-evaluations",
        "confident-ai-llm-monitoring-dataset",
      ],
      collapsed: true,
    },
    {
      type: "category",
      label: "Human-in-the-Loop",
      items: [
        "confident-ai-human-feedback",
        "confident-ai-human-feedback-adding",
        "confident-ai-human-feedback-platform",
      ],
      collapsed: true,
    },
    {
      type: "category",
      label: "LLM Tracing",
      items: [
        "confident-ai-tracing",
        "confident-ai-tracing-llama-index",
        "confident-ai-tracing-langchain",
      ],
      collapsed: true,
    },
    {
      type: "category",
      label: "Guardrails",
      items: [
        "confident-ai-guardrails",
        {
          type: "category",
          label: "Guards",
          items: [
            "confident-ai-guardrails-topical",
            "confident-ai-guardrails-cybersecurity",
            "confident-ai-guardrails-privacy",
            "confident-ai-guardrails-jailbreaking",
            "confident-ai-guardrails-prompt-injection",
            "confident-ai-guardrails-hallucination",
            "confident-ai-guardrails-graphic-content",
            "confident-ai-guardrails-illegal",
            "confident-ai-guardrails-toxicity",
            "confident-ai-guardrails-syntax",
            "confident-ai-guardrails-modernization",
          ],
          collapsed: false,
        },

      ],
      collapsed: true,
    },
  ],
  tutorial: [
    "tutorial-introduction",
    {
      type: "category",
      label: "Before We Begin",
      items: ["tutorial-setup", "tutorial-llm-application-example"],
      collapsed: false,
    },
    {
      type: "category",
      label: "Choosing Your Metrics",
      items: [
        "tutorial-metrics-defining-an-evaluation-criteria",
        "tutorial-metrics-selection",
        // "tutorial-metrics-deepeval",
        // "tutorial-metrics-confident"
      ],
      collapsed: false,
    },
    {
      type: "category",
      label: "Evaluating Your LLM",
      items: [
        "tutorial-evaluations-running-an-evaluation",
        "tutorial-evaluations-hyperparameters",
        "tutorial-evaluations-catching-regressions",
      ],
      collapsed: false,
    },
    {
      type: "category",
      label: "Improving Your Evaluation Dataset",
      items: [
        // "tutorial-placeholder",
        "tutorial-dataset-synthesis",
        "tutorial-dataset-confident",
        // "tutorial-dataset-prepared"
      ],
      collapsed: false,
    },
    // {
    //   type: "category",
    //   label: "Advanced LLM Safety Testing",
    //   items: ["tutorial-placeholder"],
    //   collapsed: false,
    // },
    {
      type: "category",
      label: "Continous Evaluation in Production",
      items: [
        "tutorial-production-monitoring",
        "tutorial-production-evaluation",
      ],
      collapsed: false,
    },
  ],
};
