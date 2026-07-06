# Cognitive Commons

> Your cognitive infrastructure belongs to you.

Cognitive Commons is a minimal user-owned context kernel: a forkable Git repo
where the user, not the provider, keeps the durable context that AI systems
interpret.

It is Git-based, LLM-agnostic, and intentionally small.

## Why This Matters Now

AI systems are becoming persistent, tool-using, and context-aware.

That is useful. It also changes the lock-in problem. When an AI provider stores
your long-term context, preferences, life history, working memory, and personal
rules on its own servers, the system can become more helpful while also making
you harder to move, audit, or reinterpret elsewhere.

The risk is not only that an AI might give bad answers. The deeper risk is that
your durable context becomes provider-owned infrastructure.

Cognitive Commons offers a counter-architecture:

- keep durable context in a repo you own
- let any LLM read or interpret it
- separate observations, hypotheses, operational rules, and theory
- keep updates visible through files and Git history
- make the structure forkable instead of platform-bound

## The Problem

Your thinking is often scattered across Obsidian notes, chat histories, AI
system prompts, private documents, and platform-specific memory.

Each tool stores a fragment of you. Each uses a different format. Each makes it
slightly harder to move.

AI companies are racing to store your context on their servers.
The better they know you, the harder you are to leave.

## The Idea

What if your cognitive structure lived in a Git repo you own?

- Any LLM can read it. Switch models anytime. Your context stays.
- Layer-structured: observations, hypotheses, decisions, and theories live in
  separate layers, not mixed in one long document.
- The act of organizing into layers forces clarity. It is not just storage; it
  is thinking infrastructure.
- Git history makes changes visible. You can inspect what moved, what was
  promoted, and what was demoted.

## What This Is

- A minimal repo structure for user-owned AI context
- A starter kernel for personal cognitive infrastructure
- A way to keep AI-readable context portable across providers
- A lightweight update protocol for moving from observation to reusable
  structure
- A reference implementation for people who want their AI context to remain
  forkable

## What This Is Not

- Not a full AI agent framework
- Not a mental health app
- Not a productivity SaaS
- Not a semantic graph system by default
- Not an automatic self-improvement machine
- Not a requirement that everyone think in the same way

The point is not to hand your cognition to a system. The point is to make your
own context readable, inspectable, and movable.

## Structure

```text
cognitive-commons/
├── logs/          # Dated raw observation (start here)
├── fragments/     # Distilled hypotheses, one idea per file
├── playbook/      # Repeatable rules for recurring situations
├── theory/        # Frameworks you have built and tested
├── core/          # The few stable kernel-level principles
├── context/       # Operator-specific premises and constraints
├── patterns/      # Field-tested operating patterns (real content — read these)
├── process/       # The input→archive execution loop
├── meta/          # Update protocol and layer management
├── scripts/       # Read-only advisory checks (never touch your content)
├── QUICKSTART.md  # Bootstrap from your own corpus, or an interview
└── README.md
```

The content layers ship mostly empty — they are yours to fill. The one place
with real, reusable content is **[`patterns/`](patterns/)**: field-tested
operating patterns distilled from running this in practice (context management,
delegation, relational safety). Start there to see what the OS is *for*.

Each layer has a clear job. Things move between layers as they mature:

`logs -> fragments -> playbook -> theory`

`core/` sits outside that normal promotion path. It should receive only stable
material that has already proven itself through operation.

Demotion and relocation are allowed. Moving something down or sideways is not a
failure; it is a responsibility correction.

The tree above is deliberately small. If you want layers this kernel doesn't
ship — experiments, external-facing tools, publication candidates, specialized
log lanes — add them when you actually need them rather than starting with empty
folders.

## How to Use It

New here? **[QUICKSTART.md](QUICKSTART.md)** bootstraps the repo from writing you
already have — tweet archives, LLM chat logs, a diary, an Obsidian vault — with a
single LLM-agnostic ingestion pass. You don't start from an empty page.

```bash
git clone https://github.com/getty77/cognitive-commons.git my-os
cd my-os
# Bootstrap from your existing corpus — see QUICKSTART.md.
# Or start fresh: write what happened today in logs/.
# Extract recurring hypotheses into fragments/.
# Move things up only when they earn it.
```

Pass your repo, or only the relevant layers, to any LLM as context.
This becomes your `.claude`, your `.chatgpt`, or your model-independent
context substrate.

For copyable frontmatter examples across the main layers, see:

[`meta/layer_management/frontmatter_samples.md`](meta/layer_management/frontmatter_samples.md)

## Relationship to the Private Research OS

Cognitive Commons is the public minimal kernel.

It is extracted from a larger private research operating system that has been
used to test the same layer model in daily operation. That private system
includes more automation, review cycles, graph-like behavior, and personal
operating history.

Cognitive Commons intentionally does not include all of that.

Its job is to keep the transferable kernel small:

- user-owned context
- forkable structure
- clear layers
- visible update path
- LLMs as interpreters, not owners

## Why "Commons"

Cognitive infrastructure should be a commons.

Not owned by a platform. Not locked behind a subscription. Not trapped inside a
single provider's memory system.

The template is free. Your instance is yours.

Fork it. Run your own.

## Status

Early. The structure works as a minimal public kernel and is extracted from a
heavier private operational system.

Public release is the experiment.

Feedback welcome. Open an issue.

---

## 日本語

> あなたの認知インフラは、あなたのものであるべきだ。

Cognitive Commons は、ユーザー所有の context kernel です。AI に読ませる長期文脈を provider 側の永続 memory ではなく、ユーザー自身が所有する fork 可能な Git repo に置くための最小構造です。

Git ベースで、LLM に依存せず、意図的に小さく保っています。

## なぜ今これが重要か

AI は、永続記憶を持ち、ツールを使い、ユーザー文脈を読む方向へ進んでいます。

それは便利です。同時に、ロックインの意味を変えます。AI provider が、あなたの長期文脈、好み、生活史、作業記憶、個人ルールを自社サーバーに蓄積すると、そのシステムは便利になる一方で、移行しにくく、監査しにくく、別の場所で再解釈しにくくなります。

問題は、AI が悪い回答をすることだけではありません。より深い問題は、あなたの長期文脈そのものが provider-owned infrastructure になることです。

Cognitive Commons は、その対抗アーキテクチャです。

- 長期文脈を自分の repo に置く
- 任意の LLM がそれを読める
- 観測、仮説、運用ルール、理論を分ける
- 更新をファイルと Git 履歴で見えるようにする
- platform-bound ではなく forkable にする

## 問題

思考は、Obsidian、チャット履歴、AI の system prompt、個人文書、platform-specific memory に散らばりがちです。

それぞれのツールが、あなたの一部を別形式で保持します。そして少しずつ移行を難しくします。

AI 企業はあなたの context をサーバーに蓄積しようとしています。知られれば知られるほど、離れにくくなります。

## 考え方

認知構造が、自分所有の Git repo に住んでいたら？

- どの LLM でも読める。モデルを切り替えても context は残る。
- 層構造になっている。観測、仮説、決定、理論が一つの長文に混ざらない。
- 層に整理する行為が、思考を明確にする。単なる保存ではなく、思考インフラになる。
- Git 履歴によって、何が動き、何が昇格し、何が降格されたかを確認できる。

## これは何か

- ユーザー所有 AI context のための最小 repo 構造
- 個人認知インフラの starter kernel
- AI-readable context を provider 間で可搬にする方法
- 観測から再利用可能な構造へ移すための軽量 update protocol
- AI context を forkable に保ちたい人のための reference implementation

## これは何ではないか

- full AI agent framework ではない
- mental health app ではない
- productivity SaaS ではない
- semantic graph system を標準要求しない
- 自動自己改善マシンではない
- 全員に同じ考え方を強制するものではない

目的は、自分の認知をシステムへ渡すことではありません。自分の context を、読める・点検できる・移動できる状態にすることです。

## 構造

```text
cognitive-commons/
├── logs/          # 日付つき生観測（ここから始める）
├── fragments/     # 蒸留された仮説、1ファイル1アイデア
├── playbook/      # 反復状況で使う運用ルール
├── theory/        # 検証された枠組み
├── core/          # 少数の安定したカーネル原則
├── context/       # 運用者固有の前提と制約
├── patterns/      # 実運用で検証した運用パターン（実コンテンツ — まず読む）
├── process/       # input→archive の実行ループ
├── meta/          # 更新 protocol と layer management
├── scripts/       # 読み取り専用の advisory（あなたの content に触れない）
├── QUICKSTART.md  # 自分の corpus から、またはインタビューでブートストラップ
└── README.md
```

content 層はほぼ空で出荷されます — あなたが埋める側です。実在する再利用可能なコンテンツは
**[`patterns/`](patterns/)** だけ：実運用から蒸留した運用パターン（文脈管理・委譲・関係性の安全）。
この OS が何のためのものかは、まずそこを読むと分かります。

各層には役割があります。成熟したものは、基本的に次の流れで移動します。

`logs -> fragments -> playbook -> theory`

`core/` は通常の昇格経路の外側にあります。実運用で安定したものだけを慎重に受け取ります。

降格や移設も許容されます。下げること、横へ移すことは失敗ではなく、責務の修正です。

上のツリーは意図的に小さく保っています。このカーネルが出荷しない層（experiments、外部向けツール、
公開候補、専門的なログ車線）が欲しくなったら、空フォルダを先に作るのでなく、実際に必要になった時に足してください。

## 使い方

```bash
git clone https://github.com/getty77/cognitive-commons.git my-os
cd my-os
# まず logs/ から始める。今日起きたことを書く。
# 反復する仮説を fragments/ へ切り出す。
# 熟成したものだけを上の層へ移す。
```

repo 全体、または必要な層だけを、任意の LLM に context として渡します。これがあなたの `.claude`、あなたの `.chatgpt`、あるいは model-independent な context substrate になります。

主要レイヤーの frontmatter 例はこちらです。

[`meta/layer_management/frontmatter_samples.md`](meta/layer_management/frontmatter_samples.md)

## private research OS との関係

Cognitive Commons は、公開可能な最小 kernel です。

これは、同じ layer model を日次運用で検証している、より大きな private research OS から切り出したものです。private 側には、より多くの自動化、review cycle、graph 的な運用、個人の運用履歴があります。

Cognitive Commons は、意図的にそこまで含めません。

役割は、移植可能な kernel を小さく保つことです。

- user-owned context
- forkable structure
- clear layers
- visible update path
- LLMs as interpreters, not owners

## なぜ "Commons" か

認知インフラは commons であるべきです。

platform に所有されず、subscription の壁に閉じ込められず、単一 provider の memory system の中に捕捉されない。

template は無料です。あなたの instance はあなたのものです。

fork して、自分のものを動かしてください。

## 状態

Early です。公開用の最小 kernel としての構造は動いており、より重い private operational system から切り出されています。

public release 自体が実験です。

feedback は issue へどうぞ。
