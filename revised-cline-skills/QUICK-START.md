# ⚡ QUICK START - Revised Cline Skills System

**TL;DR version for busy people.**

---

## **5-Minute Overview**

This system has 6 skills that work sequentially:

| # | Skill | Purpose | Time | Output |
|---|-------|---------|------|--------|
| 1 | idea-validator-psme | Is idea worth building? | 30 min | PSME score + verdict |
| 2 | grill-me | Stress-test idea before PRD | 30 min | Design gaps found |
| 3 | write-a-prd | Document requirement | 1-2 hours | `plans/prd-*.md` |
| 4 | prd-to-plan | Break to phases | 1 hour | `plans/plan-*.md` |
| 5 | do-work | Implement phases | 2-8 hours | Code + tests + commits |
| 6 | final-checklist | Pre-deploy verify | 30 min | ✅ Ready to ship |

**Total workflow:** 1-2 weeks for typical feature

---

## **The Workflow**

```
New feature idea
     ↓
1. IDEA-VALIDATOR
   "Is this worth building?"
   → STRONG GO / CONDITIONAL GO / PIVOT / NO GO
     ↓
2. GRILL-ME (right after validation)
   "Stress-test the idea before investing in PRD"
   → Design gaps found / Confidence boosted
     ↓
3. WRITE-A-PRD (if GO)
   "What exactly are we building?"
   → plans/prd-*.md
     ↓
4. PRD-TO-PLAN
   "How will we build it? (phases)"
   → plans/plan-*.md
     ↓
5. DO-WORK (repeat per phase)
   "Implement Phase 1, 2, 3..."
   → Code + tests + commits
     ↓
6. FINAL-CHECKLIST
   "Ready for production?"
   → ✅ Deploy or 🔴 Fix issues
```

---

## **How to Start Right Now**

### **You Have a New Feature Idea**

```
Step 1: Copy file 1-IDEA-VALIDATOR-PSME.md
Step 2: Open Cline
Step 3: Paste the PROMPT TEMPLATE section
Step 4: Add your idea description
Step 5: Let Cline evaluate with PSME framework
Step 6: Decision: Proceed → Go to Skill 2 (Grill-Me)
```

**Time:** 30 minutes

---

### **Idea Passed Validation — Stress-Test It**

```
Step 1: Copy file 2-GRILL-ME.md
Step 2: Open Cline
Step 3: Paste the PROMPT TEMPLATE section
Step 4: Add your idea / initial design thoughts
Step 5: Let Cline ask hard questions one-by-one
Step 6: Answer honestly, document gaps found
Step 7: Go to Skill 3 (Write-A-PRD)
```

**Time:** 30 minutes

---

### **Idea Grilled — Ready to Write PRD**

```
Step 1: Copy file 3-WRITE-A-PRD.md
Step 2: Open Cline
Step 3: Paste the PROMPT TEMPLATE section
Step 4: Add your feature description
Step 5: Let Cline explore repo + interview you
Step 6: Output: plans/prd-<feature>.md
Step 7: Go to Skill 4
```

**Time:** 1-2 hours

---

### **You Have PRD, Need Implementation Plan**

```
Step 1: Copy file 4-PRD-TO-PLAN.md
Step 2: Open Cline
Step 3: Paste the PROMPT TEMPLATE section
Step 4: Add your PRD from previous step
Step 5: Let Cline create vertical slices
Step 6: Review granularity (too many phases? too few?)
Step 7: Output: plans/plan-<feature>.md
Step 8: Go to Skill 5
```

**Time:** 1 hour

---

### **You're Uncertain About Design**

```
Step 1: Copy file 4-GRILL-ME.md
Step 2: Open Cline
Step 3: Paste the PROMPT TEMPLATE section
Step 4: Add your PRD or plan
Step 5: Let Cline ask questions one-by-one
Step 6: Answer honestly (don't defend)
Step 7: Get: Design gaps found / Confidence boosted
Step 8: Update design if needed, then continue
```

**Time:** 30 minutes

---

### **Ready to Code Phase 1**

```
Step 1: Copy file 5-DO-WORK.md
Step 2: Open Cline
Step 3: Paste the PROMPT TEMPLATE section
Step 4: Add your plan (Phase 1 specifically)
Step 5: Let Cline execute workflow:
        - Understand task
        - Setup validation tools
        - TDD (backend) / direct (frontend)
        - Validate + commit
Step 6: Phase complete, tests passing ✅
Step 7: Repeat for Phase 2, 3...
```

**Time:** 2-8 hours per phase

---

### **Ready to Deploy**

```
Step 1: Copy file 6-FINAL-CHECKLIST.md
Step 2: Open Cline
Step 3: Paste the PROMPT TEMPLATE section
Step 4: Add project info (name, version, files changed)
Step 5: Let Cline run verification checklist
Step 6: Fix any issues found
Step 7: Get verdict: READY / CONDITIONAL / BLOCKED
Step 8: Deploy! 🚀
```

**Time:** 30 minutes - 1 hour

---

## **Key Files to Have Open**

1. **README.md** — Overview & principles
2. **This file (QUICK-START.md)** — You're reading it!
3. **Skills 1-6** — Based on your current stage

---

## **Which Skill Do I Use Right Now?**

- **"I have an idea but not sure if worth building"**
  → Skill 1: idea-validator-psme

- **"Idea passed validation, want to stress-test before PRD"**
  → Skill 2: grill-me

- **"Idea validated & grilled, ready to document"**
  → Skill 3: write-a-prd

- **"Have PRD, need to break into phases"**
  → Skill 4: prd-to-plan

- **"Ready to code"**
  → Skill 5: do-work

- **"Code done, ready to ship"**
  → Skill 6: final-checklist

---

## **Real Example Timeline**

### **Week 1**
- Mon 9 AM: Have idea
- Mon 9:30 AM: Run idea-validator → STRONG GO ✅
- Mon 11 AM: Run grill-me → stress-test idea, gaps found & resolved ✅
- Mon 2 PM: Run write-a-prd → have `plans/prd-*.md` ✅
- Tue 9 AM: Run prd-to-plan → have `plans/plan-*.md` ✅

### **Week 2-3**
- Wed-Fri: Run do-work Phase 1 → code done ✅
- Mon-Tue: Run do-work Phase 2 → code done ✅
- Wed: Run code-review (bonus skill)
- Wed 2 PM: Run final-checklist → READY ✅
- Wed 4 PM: Deploy 🚀

**Total:** ~10 days from idea to production

---

## **Pro Tips**

### **Tip 1: Save PRDs & Plans**
```
project/
├── plans/
│   ├── prd-review-dashboard.md
│   └── plan-review-dashboard.md
```
Commit to Git for team reference.

### **Tip 2: Copy-Paste Entire Templates**
Don't paraphrase. Copy the full PROMPT TEMPLATE section from each skill file.

### **Tip 3: Use Cline's Follow-Ups**
Cline asks questions. Answer them honestly. Don't be defensive about your design.

### **Tip 4: One Phase at a Time**
Do-work: Complete Phase 1 fully (code + tests + commit) before starting Phase 2.

### **Tip 5: Trust the Process**
- Idea-validator: Catches bad ideas early
- Write-a-prd: Forces clarity before coding
- Prd-to-plan: Prevents wrong architecture
- Do-work: TDD catches bugs early
- Final-checklist: Prevents production disasters

---

## **When to Skip Skills**

### **Skip idea-validator if:**
- Feature already approved by PM
- Internal refactor (no validation needed)

### **Skip grill-me if:**
- Simple, straightforward feature
- You're very confident
- Time-sensitive

### **Skip final-checklist if:**
- Deploying to staging only
- Feature flag behind toggle (can disable if wrong)

**But never skip:** write-a-prd, prd-to-plan, do-work

---

## **Common Issues**

**Q: "Skill X doesn't work with my setup"**
A: File issues. Skills are based on real Claude Code skills.

**Q: "I want to skip PRD/plan and just code"**
A: You can, but you'll pay in bugs/refactoring. Invest 3 hours upfront, save 20 hours later.

**Q: "My idea failed idea-validator"**
A: That's the point! Better to know now than after 3 months of coding.

**Q: "Can I skip tests?"**
A: Do-work's TDD is the POINT. Tests catch bugs early.

---

## **Support**

Each skill file has:
- ✅ Full explanation
- ✅ Real examples  
- ✅ Common pitfalls
- ✅ Prompt templates ready to copy-paste

**Just follow the files in order.**

---

## **You're Ready**

Pick where you are in the process, use the corresponding skill file, and start.

**Good luck!** 🚀

---

*This system is based on actual Claude Code skills (write-a-prd, prd-to-plan, do-work, grill-me, idea-validator) optimized for Deepseek V4 + Cline execution.*
