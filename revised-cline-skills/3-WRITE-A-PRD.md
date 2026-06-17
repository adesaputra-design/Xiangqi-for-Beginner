# Skill 2: WRITE-A-PRD 📄

**Create PRD dengan konteks codebase kamu yang sebenarnya.**

Berbeda dari generic template, skill ini:
- ✅ Cline reads repo kamu untuk understand architecture
- ✅ Cline interviews kamu tentang design decisions
- ✅ Outputs to `plans/prd-<feature>.md`
- ✅ PRD specific to YOUR project, not generic

---

## **Why Real Codebase Context?**

Banyak PRD yang fails karena:
- ❌ Doesn't match existing architecture
- ❌ Makes wrong assumptions about schema
- ❌ Proposes solutions that conflict with framework choices
- ❌ Missing edge cases specific to your domain

**Write-a-prd fixes ini by exploring YOUR repo first.**

---

## **3-Step Process**

### **1. Gather Context**
Kamu describe:
- What problem feature solves
- Who benefits
- Why current state inadequate
- Any solution ideas

### **2. Cline Explores Repo**
Cline reads:
- `package.json` (what stack?)
- `src/` structure (architecture pattern?)
- Key models/schemas (what data?)
- Existing patterns (how things built here?)

### **3. Cline Interviews You**
Walk down decision tree:
- "Should this be REST API or websocket?"
- "Where does this data live - existing table or new?"
- "Who are the actors - admin, user, both?"
- "What are edge cases specific to your domain?"

Each question = shared understanding.

---

## **How to Use with Cline**

### **Step 1: Copy Template Below**

### **Step 2: Prepare Your Context**

Have ready:
- Feature idea/requirement
- Access to your project folder
- Thinking about: who benefits? why now?

### **Step 3: Paste to Cline**

```
[COPY ENTIRE PROMPT TEMPLATE BELOW]

[ADD YOUR IDEA]

[LET CLINE EXPLORE & INTERVIEW]
```

Cline akan:
1. Ask untuk context
2. Explore repo
3. Ask interview questions (one at a time!)
4. Write PRD
5. Save to `plans/prd-<feature>.md`

---

## **PROMPT TEMPLATE**

Salin-paste ke Cline:

```
Tolong buatkan PRD untuk feature: [YOUR FEATURE]

PROCESS YANG HARUS DIIKUTI:
1. Gather Context
   - Tanya saya tentang problem yang ingin diselesaikan
   - Tanya tentang siapa yang benefit
   - Tanya tentang solution ideas saya

2. Explore Repo
   - Read package.json untuk understand tech stack
   - Read src/ structure untuk understand architecture
   - Identify existing patterns & conventions
   - Check database schema jika ada

3. Interview
   - Ask follow-up questions tentang design decisions
   - Walk down each branch dari decision tree
   - Resolve dependencies one by one
   - Do NOT move on sampai kita punya shared understanding
   - Ask one question at a time

4. Write PRD
   - Save ke: plans/prd-<feature-name>.md
   - Use template di bawah

---

PRD TEMPLATE:

## Problem Statement

The problem the user is facing, from the user's perspective.
[Tulis dari sudut pandang user, bukan technical]

## Solution

The solution to the problem, from the user's perspective.
[Apa yang akan dipecahkan? Gimana cara kerja dari user POV?]

## User Stories

Numbered list covering ALL aspects:
Format: As a <actor>, I want <feature>, so that <benefit>.

Examples:
- As a student, I want to see my progress in real-time, so that I know which areas need more practice.
- As an admin, I want to view all user activity, so that I can moderate inappropriate content.
- As a guest, I want to preview features without account, so that I can decide to join.

[List setiap user story untuk setiap actor & scenario]

## Implementation Decisions

[Important: This is NOT code specifics, it's architectural decisions]

- Modules that will be built or modified
- Interface changes (API? UI? both?)
- Architectural decisions (how does this integrate with existing?)
- Schema changes (new table? modify existing?)
- API contracts (endpoints? request/response shape?)
- Specific interactions and edge cases

[Do NOT include specific file paths or code snippets]

Example:
- Create new `reviews` table with fields: id, userId, courseId, rating, feedback
- Add POST /api/courses/:id/reviews endpoint for submissions
- Existing `/api/courses/:id` endpoint will now include aggregated ratings
- Real-time updates via WebSocket for instructor dashboard
- Edge case: prevent duplicate reviews from same user same course

## Out of Scope

What is explicitly NOT included:
- [What won't be built?]
- [What's for future iteration?]
- [What's not our responsibility?]

## Further Notes

Any additional context:
- Open questions for technical implementation
- Follow-up items for future
- Alternative approaches considered & why rejected

---

SEKARANG MULAI DENGAN:

Saya mau buat feature: [YOUR FEATURE DESCRIPTION]

Problem yang ingin diselesaikan: [DESCRIBE PROBLEM]

Target users: [WHO BENEFITS?]

Solution ideas: [INITIAL THOUGHTS?]

---

TOLONG:
1. Tanya saya tentang context (step 1)
2. Explore repo saya untuk understand architecture
3. Ask interview questions one by one (step 3)
   - Keep asking sampai understand design fully
   - Walk down each decision branch
   - Resolve dependencies
4. Tulis final PRD
5. Save ke plans/prd-<feature>.md
6. Show saya output file

MULAI!
```

---

## **Real Example: Dashboard Feature**

**Input:**
```
Feature: Course review dashboard untuk instructor

Problem: Instructors can't see detailed feedback from students

Target users: Instructors who teach on platform

Initial idea: Dashboard showing all student reviews with filters
```

**Cline exploration:**
```
[Reads package.json]
Tech: React + Express + PostgreSQL

[Reads src/]
Architecture: Service layer pattern
Models: User, Course, Review (exists!)
API: RESTful with JWT auth

[Interviews you]
Q1: Should this realtime or batch update?
- You: Realtime would be nice
- Q2: WebSocket? Or polling?
- You: Polling fine, less infra

Q3: Instructor sees own reviews only or all?
- You: Own reviews only
- Q4: Can they filter by course rating? Date?
- You: Yeah, rating (1-5) + date range helpful

Q5: Do they export reports?
- You: Not MVP, maybe future
- Noted: Out of Scope section
```

**Output PRD:**
```
## Problem Statement
Instructors have no centralized way to view and analyze student feedback. 
They receive notifications but can't see patterns, trends, or specific feedback in one place.

## Solution
A dashboard for instructors showing all student reviews for their courses with filters 
and sorting to identify common feedback patterns.

## User Stories
- As an instructor, I want to see all reviews for my courses, so that I can understand student satisfaction
- As an instructor, I want to filter reviews by rating, so that I can focus on critical feedback
- As an instructor, I want to sort reviews by date, so that I can see recent trends
- As a student, I want to see a confirmation that my review was submitted, so that I know my feedback was received

## Implementation Decisions
- Use existing `reviews` table (already has: id, userId, courseId, rating, feedback, createdAt)
- Create new GET /api/instructors/:id/reviews endpoint with filters
- Add React component: InstructorDashboard with ReviewsList, FilterBar, SortDropdown
- Frontend polling every 30s (no WebSocket for MVP)
- Only instructor can view own courses' reviews (auth check)
- Display: Review card showing rating, feedback text, student name, date

## Out of Scope
- Export to PDF/Excel (future)
- Email summary reports (future)
- Response/reply to reviews (future iteration)

## Further Notes
- Edge case: student updates review - show latest only
- Edge case: deleted student - show review but anonymized
- Follow-up: Add reply feature in next sprint
```

---

## **Output: PRD File**

After Cline finishes, you'll have:

**Location:** `plans/prd-dashboard-feature.md`

**Content:**
- Problem statement (2-3 sentences)
- Solution overview (from user POV)
- Complete user stories (all actors, scenarios)
- Implementation decisions (architecture, schema, API, edge cases)
- Out of scope section
- Further notes

**Ready for:** Next skill → prd-to-plan

---

## **Key Differences from Writing It Yourself**

❌ **Self-written:**
- "I think we need a dashboard"
- "Show reviews somehow"
- "Make it look nice"
→ Ambiguous, missing details

✅ **With write-a-prd skill:**
- Cline understands your architecture
- Specific schema changes identified
- API contracts defined
- Edge cases surfaced
- All user stories covered
→ Implementation-ready

---

## **After PRD is Done**

Check that PRD has:
- ✅ Problem statement (clear problem, not "we need a dashboard")
- ✅ User stories (cover all actors, happy paths, edge cases)
- ✅ Implementation decisions (specific to YOUR arch)
- ✅ API contracts (if building API)
- ✅ Schema changes (if needed)
- ✅ Out of scope (what's not included)

If missing anything → Ask Cline to revise.

When happy:
→ Go to Skill 3: PRD-TO-PLAN

---

## **Pro Tips**

**Tip 1: Be specific about problems**
- ❌ "Users want better experience"
- ✅ "Instructors waste 20 min/day manually copying reviews into spreadsheet"

**Tip 2: Include all actors**
- Student, Instructor, Admin, Guest, API Client?
- Each gets their own user stories

**Tip 3: Talk through edge cases with Cline**
- What if student deletes account?
- What if same email signs up twice?
- What if review contains profanity?

**Tip 4: Don't ask Cline for code**
- PRD is about WHAT, not HOW
- Code details come in do-work skill

---

**This PRD will be more realistic than any you write alone.**

Because Cline reads YOUR codebase, not guesses about generic architecture.
