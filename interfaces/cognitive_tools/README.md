# Cognitive Tools

This directory contains practical cognitive tools that support the system in day-to-day use.

Examples:

- daily check sheets
- state assessment flows
- pre/post-dialogue alignment protocols
- friction detection notes
- log extraction protocols for ChatGPT
- save handoff protocols for execution agents
- ChatGPT / Codex / GitHub Desktop workflows
- auto-generated handoff formats

The goal here is not self-understanding itself, but reducing operational load and improving reproducibility.

Items that are not ready to live here yet can be kept in [`public_candidates/`](../../public_candidates) with `destination_tag: cognitive_tool`.

## Structure

- `protocols/`
  Procedures for extraction, saving, and handoff
- `templates/`
  Copyable templates for direct use
- `workflows/`
  Practical flows that span multiple tools
- `generated/`
  Stable generated text synchronized from scripts

The canonical handoff format lives in:

`interfaces/cognitive_tools/generated/generated_agent_handoff_format.md`

Sync it with `npm run sync:handoff-prompts` or `npm run check:protocol`.

For practical workflows that include Claude, Discord, and mobile usage, see:

`interfaces/cognitive_tools/workflows/chatgpt_codex_github_desktop_workflow.md`

For the main extraction and save protocols, see:

- `interfaces/cognitive_tools/protocols/chatgpt_log_extraction_protocol.md`
- `interfaces/cognitive_tools/protocols/codex_save_handoff_protocol.md`
