# 📚 Revised Cline Skills System

**Deepseek V4 + Cline Workflow** yang based on **actual Claude Code skills**.

Sistem ini menggabungkan:
- ✅ **Claude Code skills** (write-a-prd, prd-to-plan, do-work, grill-me, idea-validator)
- ✅ **Deepseek V4 + Cline** untuk execution
- ✅ **Real-world M2M workflow**

---

## **Workflow Overview**

```
1. VALIDATE IDEA
   └─ idea-validator / psme-framework
      ↓
      Output: Validation report dengan PSME score
      Verdict: Proceed / Conditional / Pivot / Stop

2. GRILL THE IDEA
   └─ grill-me (right after validation)
      ↓
      Output: Design gaps surfaced, assumptions clarified
      Confidence: Ready to write PRD

3. WRITE PRD
   └─ write-a-prd (via Cline)
      ↓
      Output: plans/prd-<feature>.md
      Contains: Problem, Solution, User Stories, Decisions, Out of Scope

4. CREATE PLAN
   └─ prd-to-plan (via Cline)
      ↓
      Output: plans/plan-<feature>.md
      Contains: Architectural decisions, vertical slices, phases

5. IMPLEMENT PHASES (Loop)
   └─ do-work Phase 1, 2, 3... (Deepseek V4 + Cline)
      ↓
      Output: Code + Tests + Git commits
      Method: TDD for backend, direct for frontend

6. FINAL REVIEW
   └─ final-checklist (before deploy)
      ↓
      Output: ✅ Ready for deployment
```

---

## **Key Differences from Generic Templates**

### **write-a-prd (Actual vs Generic)**

**Generic approach:** Fill form-like template  
**Actual approach:**
1. Gather context (user describes problem)
2. **Explore repo** (read actual codebase!)
3. **Interview user** (ask questions until dependency resolved)
4. Write PRD → save to `plans/prd-<name>.md`

**Impact:** PRD is based on real codebase context, not assumptions.

---

### **prd-to-plan (Actual vs Generic)**

**Generic approach:** Break into features  
**Actual approach:**
1. Identify **durable architectural decisions**
   - Routes/URL patterns
   - Database schema shape
   - Key data models
   - Auth approach
2. Create **vertical slices** (tracer bullets)
   - NOT horizontal layers
   - Each slice = thin end-to-end path
   - Each slice is demoable alone
3. Quiz user about granularity (too coarse? too fine?)
4. Output → `plans/plan-<name>.md` with acceptance criteria

**Impact:** Phases are actually implementable, not vaporware.

---

### **do-work (Actual vs Generic)**

**Generic approach:** Just code it  
**Actual approach (Backend):**
1. Setup validation tools (typescript, vitest)
2. Red/Green/Refactor TDD
   - Write 1 failing test for 1 thin slice
   - Min code to pass
   - Refactor while keeping test green
   - Move to next slice (do NOT write multiple tests upfront)
3. Run `pnpm typecheck` + `pnpm test` → all green
4. Commit with clear message

**Actual approach (Frontend):**
- Implement directly (no TDD required)
- But still validate & commit

**Impact:** Code is tested by design, not testing added after.

---

### **grill-me (New)**

**Purpose:** Stress-test plan/design before implementation  
**When:** Before starting do-work, or midway if stuck  
**How:** I ask questions one at a time, walking down decision tree  
**Output:** Identified gaps, dependencies clarified

**Impact:** Catch design issues before coding starts.

---

### **idea-validator / psme-framework (New)**

**Purpose:** Decide if idea is worth building BEFORE investing time  
**Framework:** PSME (Problem, Solution, Market, Execution)  
**Output:** IVFS score (0-10) + kill switches  
**Verdict:** STRONG GO / CONDITIONAL GO / PIVOT / NO GO

**Kill switches (auto fail):**
- Problem score < 5 → Problem isn't real
- P3 (solution gap) < 4 → Better solutions exist
- S1 (solution fit) < 4 → Idea doesn't solve the problem

**Impact:** Pivot before building, not after wasting months.

---

## **How to Use This System**

### **For a New Feature:**

```
Step 1: Validate
(Optional but recommended)

Use idea-validator skill:
- Define problem clearly
- Score PSME
- Check kill switches
- Decision: Proceed? Pivot? Stop?

---

Step 2: Plan
(Use Cline with skill guides in this folder)

Use write-a-prd skill:
- Gather context about feature
- Cline reads your repo
- Cline interviews you about decisions
- Output: plans/prd-*.md

Use prd-to-plan skill:
- Break PRD into vertical slices
- Identify durable decisions
- Quiz about granularity
- Output: plans/plan-*.md

---

Step 3: Implement
(Deepseek V4 + Cline)

Use do-work skill for each phase:
- Setup validation tools
- TDD for backend / direct for frontend
- All tests + typecheck green
- Proper git commits

Repeat for each phase until done

---

Step 4: Stress-test (Optional)
Use grill-me skill if:
- Stuck on decision
- Want to deep-dive design
- Before major implementation

---

Step 5: Review & Deploy
Use code-review + final-checklist before production
```

---

## **Folder Structure**

After using this system, your project will have:

```
project/
├── .cline-skills/
│   ├── 1-IDEA-VALIDATOR-PSME.md
│   ├── 2-WRITE-A-PRD.md
│   ├── 3-PRD-TO-PLAN.md
│   ├── 4-GRILL-ME.md
│   ├── 5-DO-WORK.md
│   └── 6-FINAL-CHECKLIST.md
│
├── plans/
│   ├── prd-user-dashboard.md
│   └── plan-user-dashboard.md
│
├── src/
└── tests/
```

---

## **Files in This System**

| File | Purpose | Use When |
|------|---------|----------|
| `1-IDEA-VALIDATOR-PSME.md` | Score idea with PSME framework | New project or major feature |
| `2-GRILL-ME.md` | Stress-test idea before writing PRD | Right after validation |
| `3-WRITE-A-PRD.md` | Create PRD from scratch | Idea validated & grilled |
| `4-PRD-TO-PLAN.md` | Break PRD into phases | After PRD is done |
| `5-DO-WORK.md` | Implement one phase end-to-end | Ready to write code |
| `6-FINAL-CHECKLIST.md` | Pre-deployment QA | Before going to production |

---

## **Integration with Claude Code**

These Cline skills are **complementary** to actual Claude Code:

```
Claude Code (Terminal)               Deepseek V4 + Cline (VS Code)
─────────────────────               ──────────────────────────
run write-a-prd skill    ────→       Copy guide → use with Cline
run prd-to-plan skill    ────→       Copy guide → use with Cline
(planning done)                      
                                     run do-work Phase 1, 2, 3...
                                     (execution with Cline)
```

**Best practice:** Use Claude Code for writing PRD & planning, use Cline for implementation.

---

## **Key Principles (from actual skills)**

### **1. Context Matters**
Write-a-prd doesn't just generate PRD. It:
- Reads your actual codebase
- Asks questions about YOUR architecture
- Outputs PRD specific to your project

### **2. Vertical Slices, Not Layers**
Prd-to-plan breaks into thin end-to-end slices, not:
- ❌ Database layer first, then API, then UI
- ✅ Feature 1 end-to-end, then Feature 2, then Feature 3

### **3. Test-First Backend**
Do-work uses TDD:
- Write test → see it fail
- Min code to pass
- Refactor while green
- Move to next slice

NOT: Code everything, then add tests.

### **4. One Question at a Time**
Grill-me asks questions one at a time, not dumping 10 questions.

### **5. Kill Switches Matter**
Idea-validator has automatic NO GO conditions. If triggered:
- Don't proceed regardless of other scores
- Pivot or re-think

---

## **Next Steps**

1. ✅ You have this README
2. → Read each skill guide (1-6) in order
3. → Start with Step 1 (idea-validator) for your next feature
4. → Use Cline to execute each step
5. → Track outputs in `plans/` folder

---

**This is the REAL system.** Not generic templates.

Each guide is based on how Claude Code skills actually work, optimized for Deepseek V4 + Cline execution.

**Let's build something solid.** 🚀
