# Project Submission Report

## 1. Student Details

- **Full Name:** Talamson Mark
- **GitHub Username:** emtee-1023
- **Email:** mark.talamson@strathmore.edu

---

## 2. Deployed Project Link

- **Live GitHub Pages URL:** [https://is-project-2026.github.io/api-key-management-154311/](https://is-project-2026.github.io/api-key-management-154311/)

---

## 3. Reflection — Grounded in Your Git History

> **Rules:** Every answer below **must include a direct link** to the specific commit, PR, issue, or branch in your repository that demonstrates what you are describing. Answers without working links will not be graded. Generic explanations that could apply to any project will receive zero marks.
>
> **Marks:** A (2 marks) · B (1 mark) · C (1 mark) · D (1 mark) = **5 marks total**

### A. Your Best Commit

Paste the URL of the commit in your history that you think best demonstrates clean conventional commit practice (good type tag, clear subject, meaningful body or footer).

- **Commit URL:** [Paste the full GitHub commit URL here]
- **Why this one?** [1–2 sentences explaining what makes this commit well-structured]

### B. A Mistake or Struggle

Link to a commit, PR, or issue where something went wrong — a bad commit message you had to fix, a branch you had to delete and recreate, a PR that needed rework, or a deployment that broke.

- **Link to the evidence:** [Paste URL here]
- **What happened and how did you recover?** [2–3 sentences]

### C. A Pull Request You're Proud Of

Paste the URL of the PR that best shows your self-review process — one where the description is clear, the issue linkage is correct, and the diff tells a coherent story.

- **PR URL:** [Paste the full GitHub PR URL here]
- **What did you check before merging?** [1–2 sentences on what you reviewed]

### D. One Thing You Would Do Differently

If you had to restart this project from scratch with everything you know now, name one specific workflow decision you would change (not a code change — a Git/project management decision).

- **What would you change?** [1–2 sentences]
- **Link to the evidence of the original decision:** [Paste URL to the commit, branch, or issue that shows the decision you'd redo]

---

## 4. Screenshots of Key GitHub Features

Demonstrate your workflow mechanics by embedding your screenshots below.

> **CRITICAL FOR WORKING IMAGES:** Do not type manual folder paths. Edit this file directly on the GitHub web interface, click on the blank line below each prompt, and **paste (Ctrl+V / Cmd+V)** your screenshot. GitHub will automatically upload the file and generate a permanent, working image link for you.

### A. Milestones and Issues

_Provide a screenshot showing your active milestone(s) and the granular tracking issues linked directly to them._

<img width="1920" height="487" alt="image" src="https://github.com/user-attachments/assets/d401041f-5ca0-49d3-8dac-61fdbee9c546" />


- **Caption:** The Git Workflow & Merge Conflict Resolution milestone contains granular issues for demonstrating and resolving three distinct merge conflict scenarios, with each issue linked to the milestone for structured tracking.

### B. Project Board

_Provide a screenshot of your GitHub Project Board with your issues organized dynamically across columns (To Do, In Progress, Done)._

<img width="1237" height="929" alt="Screenshot from 2026-08-17 21-29-29" src="https://github.com/user-attachments/assets/4ee80c09-84ed-4d03-9204-9019ad1e49e7" />

- **Caption:** The project board demonstrates active workflow progression, with merge-conflict tasks moving from **To Do** through **In Progress** to **Done** as development and review activities are completed.

### C. Branching Architecture

_Provide a screenshot showing your local or remote Git branch list, highlighting your use of conventional, issue-linked naming patterns (e.g., `feat/`, `fix/`, `style/`)._

<img width="1305" height="745" alt="image" src="https://github.com/user-attachments/assets/5d5a4325-70ac-4df7-b65c-f2ff3a69fd5b" />


- **Caption:** The branch architecture demonstrates isolated development through issue-linked `feat/`, `docs/`, and other conventional branch prefixes, with changes developed separately from `main`.

### D. Pull Requests & Traceability

_Provide a screenshot of a completed or open Pull Request (PR) on GitHub that clearly shows it is linked to a related development issue._

<img width="924" height="707" alt="image" src="https://github.com/user-attachments/assets/aad04243-1563-4754-8dd7-939e90e4e829" />

- **Caption:** PR #19 implements the dashboard analytics task and closes Issue #11, providing traceability to the merged changes.
---

## 5. Merge Conflict Evidence

You must engineer **three merge conflicts**, each triggered by a **different cause** from those covered in the lecture. For Conflict 1, document the full resolution lifecycle. For Conflicts 2 and 3, provide the conflict marker screenshot and identify the cause.

> **Marks:** Conflict 1 full chronology (2 marks) · Conflict 2 (1 mark) · Conflict 3 (1 mark) · All three use distinct causes (1 mark) = **5 marks total**

---

### Conflict 1 — Full Chronology

**What cause did you use?** Same-line content modification conflict.

#### Step 1: Generating the Clash

_Screenshot showing the merge attempt and the conflict warning._

<img width="477" height="84" alt="Screenshot from 2026-08-17 23-16-23" src="https://github.com/user-attachments/assets/9392300f-6d8a-4ee8-b8f5-732737392edc" />

- **Caption:** The `feat/conflict-1-production` branch was merged into `feat/21-conflict-1-staging`, but Git detected a content conflict because both branches modified the same `Environment` line in `conflict1.txt`.

#### Step 2: Inside the Code Editor (Conflict Markers)

_Screenshot showing the raw, unresolved conflict markers (`<<<<<<< HEAD`, `=======`, `>>>>>>>`) in your editor._

<img width="1389" height="343" alt="Screenshot from 2026-08-17 21-47-55" src="https://github.com/user-attachments/assets/b4691f61-786d-4278-8ca4-184de9501c91" />


- **Caption:** The conflict markers show the competing `Staging` and `Production` values on the same line. The conflict was resolved by accepting the incoming `Production` version and removing the conflict markers.

#### Step 3: Resolution & Clean Merge

_Screenshot of your clean Git history or completed PR showing the conflict was resolved and merged._

<img width="1920" height="884" alt="image" src="https://github.com/user-attachments/assets/32e3a750-21cf-4b21-8f33-9eb32126d8bd" />


- **Caption:** The conflict was resolved by retaining the `Production` configuration. The resolution was committed using a Conventional Commit, pushed to the feature branch, reviewed through a pull request, and successfully merged into `main`.

---

### Conflict 2 — Different Cause

**What cause did you use?** Add/Add conflict.

**Why does this cause trigger a conflict?** An add/add conflict occurs when two branches independently create a file with the same path but different contents. Git cannot automatically determine which version of the newly created file should be retained, requiring manual resolution.

<img width="1389" height="343" alt="Screenshot from 2026-08-17 22-06-02" src="https://github.com/user-attachments/assets/2e628255-23a5-4cae-8c21-95af3456c482" />


- **Caption:** The `feat/conflict-2-staging` and `feat/conflict-2-production` branches independently created `conflict-lab/conflict2.txt` with different contents, causing an add/add conflict when the branches were merged.

---

### Conflict 3 — Different Cause

**What cause did you use?** Rename/Delete conflict.

**Why does this cause trigger a conflict?** A rename/delete conflict occurs when one branch renames a file while another branch deletes the same file. Git cannot automatically determine whether the renamed file should be retained or whether the deletion should take precedence.

<img width="1389" height="343" alt="Screenshot from 2026-08-17 22-18-49" src="https://github.com/user-attachments/assets/0fb9e2e9-e1ab-40ca-8675-7b66ed713e5b" />


- **Caption:** The `feat/conflict-3-rename` branch renamed `conflict3.txt` to `deployment-config.txt`, while the `feat/conflict-3-delete` branch deleted the file. Git therefore reported a rename/delete conflict requiring manual resolution.

## 6. Feedback & Evaluation

To help improve this course for future engineering cohorts, please take 2 minutes to fill out the anonymous feedback form. Your honest review helps shape how this program is taught next semester!

- [ ] **Anonymous Evaluation Form:** [Course &amp; Instructor Evaluation](https://forms.gle/YLybnsyXXErKEg3s9)

---

## Final Submission

Once your repository is complete, submit your work through the official submission form below. The form will **stop accepting responses after Monday, August 17th, 2026** — no late submissions will be accepted.

> **Submission Form:** [https://forms.gle/KrT4VxtFtkU3wtYu8](https://forms.gle/KrT4VxtFtkU3wtYu8)
