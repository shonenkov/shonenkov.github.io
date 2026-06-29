---
title: "Kaggle TPU Star"
image: "/assets/images/achievements/tpu-star.png"
order: 2
year: 2020
links:
  - label: TPU Stars hall of fame
    url: "https://www.kaggle.com/tpu-stars"
  - label: Jigsaw competition
    url: "https://www.kaggle.com/competitions/jigsaw-multilingual-toxic-comment-classification"
  - label: Award announcement
    url: "https://www.kaggle.com/competitions/jigsaw-multilingual-toxic-comment-classification/discussion/171206"
  - label: TPU-Star toolkit
    url: "https://github.com/shonenkov/TPU-Star"
---

**TPU Star** recipient at the [Jigsaw Multilingual Toxic Comment Classification](https://www.kaggle.com/competitions/jigsaw-multilingual-toxic-comment-classification) competition (2020).

## What is TPU Star?

**TPU Star** is a Kaggle community award for notebooks, tooling, and tutorials that help others train and run models on **Google TPUs** inside Kaggle's free TPU runtime. Winners are featured on the permanent [TPU Stars](https://www.kaggle.com/tpu-stars) page — a curated hall of fame of the most useful TPU work on the platform.

The award is not about leaderboard placement. It recognizes people who made TPU workflows **accessible, fast, and reusable** for the wider Kaggle community — especially when a new accelerator stack is still hard to use.

## The competition context

[Jigsaw Multilingual Toxic Comment Classification](https://www.kaggle.com/competitions/jigsaw-multilingual-toxic-comment-classification) was the third Jigsaw toxicity challenge on Kaggle. The task: build a multilingual toxicity classifier using **English-only training data**, then evaluate on Wikipedia talk-page comments in **six languages** (Spanish, Turkish, Italian, Russian, Portuguese, French).

The competition coincided with the launch of **Kaggle TPU support** and was explicitly designed to push participants toward large-model training on TPUs. Because early TPU runtimes required public data sharing, the community ended up publishing a large share of kernels, datasets, and tooling — which made high-quality public notebooks especially valuable.

## My contribution

Most early public kernels for this competition were **TensorFlow-based**. I focused on **PyTorch/XLA** — at the time a much less explored path on Kaggle TPUs — and published notebooks that became community references for training and running **XLM-RoBERTa** on TPU:

| Notebook | Role |
| --- | --- |
| [TPU Inference: Super Fast XLM-RoBERTa](https://www.kaggle.com/code/shonenkov/tpu-inference-super-fast-xlmroberta) | Fast, reusable inference scaffold for multilingual toxicity prediction |
| [TPU Training: Super Fast XLM-RoBERTa](https://www.kaggle.com/code/shonenkov/tpu-training-super-fast-xlmroberta) | Clean distributed training loop for fine-tuning XLM-R on 8-core TPU |
| [Class Balance with PyTorch/XLA](https://www.kaggle.com/code/shonenkov/class-balance-with-pytorch-xla) | Balanced sampling technique for distributed TPU training |

![TPU training notebook — XLM-RoBERTa on Kaggle TPU](/assets/images/notebooks/tpu-training-xlmroberta.png)

The notebooks emphasized practical details that were easy to get wrong on early PyTorch/XLA: `xmp.spawn` multi-process setup, `ParallelLoader`, device placement, checkpointing, and keeping training loops readable enough to fork. 

Jigsaw and Kaggle recognized this work with a **TPU Star award** — [announced](https://www.kaggle.com/competitions/jigsaw-multilingual-toxic-comment-classification/discussion/171206) as one of two special prizes for participants who shared the most impactful public TPU models and tooling during the competition.

<div class="achievement-prize">
  <p><strong>$5,000 TPU Star cash prize.</strong> Jigsaw awarded two special TPU Star prizes alongside the main competition leaderboard payouts (total prize pool: <strong>$50,000</strong>).</p>
</div>
