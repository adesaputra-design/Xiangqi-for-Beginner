# 📑 Revised Cline Skills System - FILE INDEX

**What's in this folder and what changed from the first version.**

---

## **Files Included**

### **Core Documentation**

1. **README.md** (7.7 KB)
   - Overview of revised system
   - Key differences from generic templates
   - Principles of actual skills
   - Integration with Claude Code

2. **QUICK-START.md** (6.8 KB) ⭐ **START HERE**
   - 5-minute overview
   - Which skill to use when
   - Timeline example
   - Pro tips

3. **INDEX.md** (this file)
   - Explanation of all files

### **6 Skill Templates**

4. **1-IDEA-VALIDATOR-PSME.md** (7.5 KB)
   - Framework: PSME (Problem, Solution, Market, Execution)
   - Decide if idea worth building
   - Kill switches (auto-fail conditions)
   - When to use: Before anything else

5. **2-GRILL-ME.md** (9.1 KB)
   - Stress-test idea/plan
   - Walk decision tree, ask hard questions
   - Surface assumptions & gaps
   - When to use: Right after idea-validator, before write-a-prd

6. **3-WRITE-A-PRD.md** (9.2 KB)
   - Create PRD with real codebase context
   - Cline explores repo, interviews you
   - Output: `plans/prd-*.md`
   - When to use: After idea validated & grilled

7. **4-PRD-TO-PLAN.md** (11 KB)
   - Break PRD into vertical slices
   - Identify durable architectural decisions
   - Create implementation phases
   - Output: `plans/plan-*.md`
   - When to use: After PRD complete

8. **5-DO-WORK.md** (12 KB)
   - Implement one phase end-to-end
   - TDD red/green/refactor for backend
   - Direct implementation for frontend
   - Output: Code + tests + commits
   - When to use: Ready to code

9. **6-FINAL-CHECKLIST.md** (11 KB)
   - Pre-deployment verification
   - 8 checklist categories
   - Go/no-go decision
   - When to use: Before production deploy

### **Archived**

10. **CLINE-SKILLS-USAGE-GUIDE.md** (7.7 KB)
    - Old generic template (for reference)
    - Not recommended - use new skills instead

---

## **What Changed from First Version?**

### **First Version (Generic Templates)**
I created templates that:
- ❌ Looked like real skills but weren't
- ❌ Were form-filling oriented
- ❌ Didn't match actual skill workflows
- ❌ Weren't based on reading actual Claude Code skills

### **Second Version (REVISED - This One)**
I read **actual Claude Code skill files** and created templates that:
- ✅ Match real skill workflows exactly
- ✅ Include real examples with code
- ✅ Explain WHY things work this way
- ✅ Based on actual skill implementation

---

## **Key Improvements**

### **Skill 1: idea-validator-psme**
**NEW:** Added actual PSME framework scoring:
- P (Problem): Severity, Frequency, Solution Gap, Awareness
- S (Solution): Root cause, 10x differentiation, Clarity, Adoption
- M (Market): Population, WTP, Reachability, Timing
- E (Execution): Domain, Advantage, Resources, Speed
- Kill switches (auto-fail if P<5 or P3<4 or S1<4)

### **Skill 2: write-a-prd**
**NEW:** Includes codebase exploration
- Not just form-filling
- Cline actually reads your repo
- Codebase context shapes PRD
- Interview process for decisions

### **Skill 3: prd-to-plan**
**NEW:** Vertical slices, not layers
- Each phase = end-to-end (schema + API + UI + tests)
- NOT: Database phase, then API phase, then UI
- Durable architectural decisions upfront
- Acceptance criteria per phase

### **Skill 4: grill-me (NEW)**
**NEW:** Stress-testing skill not in first version
- Based on actual grill-me Claude Code skill
- Walk decision tree asking hard questions
- One question at a time
- Find design gaps before coding

### **Skill 5: do-work**
**NEW:** Actual TDD workflow with red/green/refactor
- NOT: Code then test
- BUT: Test → code → test passes → refactor → next test
- One thin vertical slice per test
- Setup validation tools upfront

### **Skill 6: final-checklist**
**UNCHANGED:** Pre-deployment checklist (still solid)
- 8 categories of verification
- Go/no-go decision
- Rollback procedure

---

## **Which Files Should You Use?**

### **If You Just Want to Get Started**
→ Read `QUICK-START.md` (5 minutes)
→ Pick the skill that matches your current stage
→ Copy-paste prompt template to Cline

### **If You Want Deep Understanding**
→ Read `README.md` (context & principles)
→ Read corresponding skill file (full workflow)
→ Then use with Cline

### **If You Want to Understand Why**
→ Read `INDEX.md` (this file) for context
→ Read each skill file's "Why" sections
→ Understand the reasoning behind each step

---

## **How to Use This System**

### **Step 1: Choose Your Stage**

| Your Situation | Use This Skill |
|---|---|
| Have idea, not sure if worth building | 1-IDEA-VALIDATOR-PSME |
| Idea approved, need to document | 2-WRITE-A-PRD |
| Have PRD, need implementation plan | 3-PRD-TO-PLAN |
| Uncertain about design | 4-GRILL-ME |
| Ready to code | 5-DO-WORK |
| Code done, ready to ship | 6-FINAL-CHECKLIST |

### **Step 2: Read the Skill File**
Pick appropriate skill file and read it.

### **Step 3: Copy Prompt Template**
Find the "PROMPT TEMPLATE" section in skill file.
Copy ENTIRE section (don't paraphrase).

### **Step 4: Paste to Cline**
Open Cline chat, paste template.
Add your specific information.
Let Cline execute workflow.

### **Step 5: Use Output**
- PRD → save to `plans/prd-*.md`
- Plan → save to `plans/plan-*.md`
- Code → commit with clear message
- Etc.

---

## **Relationship to Claude Code**

**Claude Code Skills** (full context):
- write-a-prd
- prd-to-plan
- do-work
- grill-me
- idea-validator

**Deepseek V4 + Cline** (these templates):
- Same workflows
- Adapted for Cline interface
- Copy-paste templates instead of native skills
- Same quality, slightly more manual

**Best Practice:**
- Use Claude Code for planning (PRD, plan)
- Use Cline for implementation (do-work)
- Switch between them for M2M workflow

---

## **File Sizes**

| File | Size | Read Time |
|------|------|-----------|
| QUICK-START.md | 6.8 KB | 5 min |
| README.md | 7.7 KB | 10 min |
| 1-IDEA-VALIDATOR-PSME.md | 7.5 KB | 15 min |
| 2-WRITE-A-PRD.md | 9.2 KB | 20 min |
| 3-PRD-TO-PLAN.md | 11 KB | 25 min |
| 4-GRILL-ME.md | 9.1 KB | 20 min |
| 5-DO-WORK.md | 12 KB | 30 min |
| 6-FINAL-CHECKLIST.md | 11 KB | 25 min |
| **TOTAL** | **~73 KB** | **~2 hours** |

---

## **Recommended Reading Order**

### **First Time (Full Understanding)**
1. QUICK-START.md (5 min)
2. README.md (10 min)
3. Skill file for your current stage (20-30 min)
4. Implement with Cline (actual time varies)

### **Subsequent Uses (Fast)**
1. QUICK-START.md (skim)
2. Relevant skill file (skim to prompt template)
3. Paste template to Cline
4. Execute

---

## **Integration with Your Project**

**Recommended setup:**

```
your-project/
├── .cline-skills/
│   ├── 1-IDEA-VALIDATOR-PSME.md
│   ├── 2-WRITE-A-PRD.md
│   ├── 3-PRD-TO-PLAN.md
│   ├── 4-GRILL-ME.md
│   ├── 5-DO-WORK.md
│   ├── 6-FINAL-CHECKLIST.md
│   └── README.md
│
├── plans/
│   ├── prd-feature-1.md
│   ├── plan-feature-1.md
│   ├── prd-feature-2.md
│   └── plan-feature-2.md
│
├── src/
└── tests/
```

**Commit to Git:**
```bash
git add .cline-skills/
git add plans/
git commit -m "docs: add Cline skills system"
```

---

## **What's NOT Included**

❌ **Code-specific examples** (varies by framework)  
❌ **API design patterns** (use REST/GraphQL docs)  
❌ **Database schema examples** (domain-specific)  
❌ **Testing library tutorials** (use vitest/jest docs)  

✅ **What IS included:** Meta-workflow for all of above

---

## **Next Steps**

1. **Extract the archive** (if downloaded as .tar.gz)
2. **Read QUICK-START.md** (5 minutes)
3. **Identify your stage** (where are you in process?)
4. **Open relevant skill file**
5. **Copy prompt template**
6. **Use with Cline**
7. **Track outputs in `plans/` folder**

---

## **Questions?**

Each skill file has:
- ✅ Full explanation
- ✅ Real-world examples
- ✅ Common pitfalls
- ✅ Pro tips

**Just read the relevant file.**

---

## **You're All Set**

This is the **REAL system** based on actual Claude Code skills.

No guessing, no templates that don't work.

**Use it with confidence.** 🚀

---

*System created: June 17, 2026*  
*Based on actual Claude Code skills*  
*Optimized for Deepseek V4 + Cline*  
*For M2M Workflow with AI Hero*
