# Skill 3: PRD-TO-PLAN 📋

**Break PRD into implementable phases using vertical slices.**

Key difference from generic breakdown:
- ✅ Identify durable architectural decisions FIRST
- ✅ Create vertical slices (end-to-end), NOT horizontal layers
- ✅ Each slice is independently demoable
- ✅ Output to `plans/plan-<feature>.md`

---

## **Why Vertical Slices Matter?**

### ❌ Horizontal Approach (WRONG)
```
Phase 1: Build database schema
Phase 2: Build API endpoints
Phase 3: Build UI
Phase 4: Add validation
Phase 5: Add tests

Problem:
- End of Phase 1: Nothing works yet
- End of Phase 2: Still nothing works
- Takes until Phase 5 to validate any decision
- Silo-ed work (DB person, API person, UI person)
```

### ✅ Vertical Slice Approach (RIGHT)
```
Phase 1: User can see review list (schema + API + UI + tests)
Phase 2: User can filter by rating (schema update + API update + UI update + tests)
Phase 3: User can export data (new API + UI + tests)

Benefit:
- End of Phase 1: FEATURE WORKS, can demo
- End of Phase 2: MORE FEATURES WORK, can demo
- Constant validation feedback
- Cross-functional slice (db + api + ui together)
```

---

## **How to Use with Cline**

### **Step 1: Have PRD Ready**

Should have:
- `plans/prd-<feature>.md` from Skill 2
- All user stories documented
- Implementation decisions clear

### **Step 2: Copy Template Below**

### **Step 3: Paste to Cline with PRD**

```
[COPY ENTIRE PROMPT TEMPLATE BELOW]

[PASTE YOUR PRD]

[CREATE PLAN]
```

Cline akan:
1. Read your PRD
2. Identify durable architectural decisions
3. Propose vertical slices
4. Quiz kamu tentang granularity
5. Write plan file
6. Save to `plans/plan-<feature>.md`

---

## **PROMPT TEMPLATE**

Salin-paste ke Cline:

```
Tolong buat implementation plan dari PRD ini dengan vertical slices.

ABOUT VERTICAL SLICES:
- NOT horizontal layers (database, then API, then UI)
- YES thin end-to-end paths through ALL layers
- Each slice: schema + API + UI + tests
- Each slice: independently testable & demoable
- Prefer many thin slices over few thick ones

PROCESS:

1. IDENTIFY DURABLE ARCHITECTURAL DECISIONS
   Read PRD, then identify decisions that won't change:
   - Route structures / URL patterns
   - Database schema shape
   - Key data models
   - Authentication / authorization approach
   - Third-party service boundaries
   
   List these in plan header.

2. DRAFT VERTICAL SLICES
   Break PRD into tracer bullet phases. For each phase:
   - Title: short descriptive name
   - User stories covered: which stories from PRD
   - What to build: end-to-end behavior description
   - Acceptance criteria: testable checkpoints
   
   Rules:
   - Each slice = complete path through system (schema, API, UI, tests)
   - Slice is demoable/verifiable standalone
   - Include durable decisions (route paths, schema shapes)
   - Do NOT include specific file names, function names

3. QUIZ USER
   Show proposed breakdown. Ask:
   - Does granularity feel right? (too coarse? too fine?)
   - Should any phases be merged or split?
   - Iterate until approval

4. WRITE PLAN FILE
   Save to: plans/plan-<feature-name>.md
   Use template below

---

PLAN TEMPLATE:

# Plan: <Feature Name>

> Source PRD: <reference to prd file>

## Architectural Decisions

Durable decisions that apply across all phases:

- **Routes**: [what URL patterns?]
  Example: POST /api/courses/:id/reviews, GET /api/reviews?courseId=X

- **Schema**: [new tables/changes?]
  Example: New `reviews` table with: id, userId, courseId, rating, feedback, createdAt

- **Key Models**: [what's the core data model?]
  Example: Review, Rating, ReviewAuthor

- **Authentication**: [who can do what?]
  Example: Only instructor can view reviews for own courses

- **External services**: [any third-party integrations?]
  Example: None for MVP

---

## Phase 1: <Title>

**User stories covered**: 
[Which user stories from PRD are in this phase?]

### What to Build

[Concise description of this vertical slice in plain language]

Example for Phase 1 - "Instructor can see review list":
"An instructor can visit their dashboard, see all reviews for all their courses displayed as a list. 
Each review shows: student name, rating (1-5), feedback text, date submitted. 
This is read-only view, no interactions yet."

### Acceptance Criteria

- [ ] Reviews table exists with correct schema
- [ ] GET /api/instructors/:id/reviews endpoint returns reviews for instructor's courses
- [ ] Dashboard shows review list with all required fields
- [ ] Only instructor can access their own reviews (auth check)
- [ ] Tests cover: happy path (has reviews), empty state (no reviews), auth failure

---

## Phase 2: <Title>

[Repeat above format]

---

## Phase N: <Title>

[Repeat above format]

---

NOW EXECUTE:

Here is my PRD:

[PASTE YOUR PRD HERE]

Please:
1. Identify the durable architectural decisions
2. Propose vertical slice phases (show as numbered list with title + user stories)
3. Ask me about granularity - too coarse? too fine? should merge/split?
4. Once approved, write final plan file
5. Save to: plans/plan-<feature>.md
6. Show me the complete output

MULAI!
```

---

## **Real Example: Review Dashboard**

**PRD Input:**
```
Feature: Course review dashboard
User stories:
- As instructor, see all reviews
- As instructor, filter by rating
- As instructor, sort by date
- As student, see confirmation after submit
```

**Cline identifies durable decisions:**
```
- Routes: GET /api/instructors/:id/reviews, GET /api/reviews/:id
- Schema: reviews table (id, userId, courseId, rating, feedback, createdAt)
- Models: Review, Rating, Instructor
- Auth: JWT, instructor owns their reviews only
- No external services for MVP
```

**Cline proposes phases:**
```
Phase 1: Instructor can see review list
- User stories: As instructor, see all reviews; As student, see confirmation
- Build: Schema + API + Dashboard UI + Tests
- Acceptance: Reviews display, auth check works, empty state works

Phase 2: Instructor can filter reviews by rating
- User stories: As instructor, filter by rating
- Build: Schema update (if needed) + API filter param + UI filter dropdown + Tests
- Acceptance: Filter works, applies to displayed list, persists in URL

Phase 3: Instructor can sort reviews by date
- User stories: As instructor, sort by date
- Build: API sort param + UI sort toggle + Tests
- Acceptance: Sort ascending/descending, updates list, works with filter
```

**Output file:**
```
# Plan: Instructor Review Dashboard

> Source PRD: plans/prd-instructor-dashboard.md

## Architectural Decisions

- **Routes**: 
  - GET /api/instructors/:id/reviews (list reviews for instructor)
  - GET /api/reviews/:id (get single review detail)

- **Schema**: 
  - Use existing reviews table: id, userId, courseId, rating, feedback, createdAt

- **Key Models**: 
  - Review, Instructor, Course

- **Authentication**: 
  - JWT required. Instructor can only view reviews for own courses.

- **External services**: 
  - None for MVP

---

## Phase 1: Instructor Can See Review List

**User stories**: 
- As instructor, I want to see all reviews for my courses, so that I can understand feedback
- As student, I want to see confirmation that my review was submitted, so that I know it was received

### What to Build

Instructor visits dashboard, sees paginated list of all reviews for all their courses. 
Each review shows: student name, rating (1-5 stars), feedback text, submission date. 
List is read-only at this phase.

### Acceptance Criteria

- [ ] GET /api/instructors/:id/reviews returns list of reviews for instructor's courses
- [ ] Reviews API response includes: id, courseId, rating, feedback, createdAt, studentName
- [ ] Dashboard loads list, displays in table/card format
- [ ] Auth: Only instructor can view own reviews (403 if different instructor)
- [ ] Empty state: "No reviews yet" shows when no reviews
- [ ] Pagination: Shows 10 reviews per page (can load more)
- [ ] Tests cover: happy path, empty state, auth failure, pagination

---

## Phase 2: Instructor Can Filter Reviews by Rating

**User stories**:
- As instructor, I want to filter reviews by rating, so that I can focus on critical feedback

### What to Build

Dashboard includes filter dropdown (All ratings, 5-star only, 4-star only, etc). 
Selecting filter immediately updates displayed reviews. 
Filter state persists in URL.

### Acceptance Criteria

- [ ] API supports query param: ?rating=5 (or null for all)
- [ ] Filter dropdown UI renders with options: All, 5★, 4★, 3★, 2★, 1★
- [ ] Clicking filter updates list immediately (client-side or API call?)
- [ ] Filter state updates URL: /dashboard?rating=5
- [ ] Refreshing page maintains filter selection
- [ ] Tests cover: each filter value returns correct reviews, combined with pagination

---

## Phase 3: Instructor Can Sort Reviews by Date

**User stories**:
- As instructor, I want to sort reviews by date, so that I can see recent trends

### What to Build

Dashboard includes sort toggle (Newest first / Oldest first). 
Works independently and combined with filter. 
Sort preference persists in URL.

### Acceptance Criteria

- [ ] API supports query param: ?sort=createdAt:desc (or asc)
- [ ] Sort toggle UI (Newest / Oldest)
- [ ] Clicking sort re-fetches reviews in correct order
- [ ] Sort + filter work together: ?rating=5&sort=createdAt:desc
- [ ] Both params persist in URL
- [ ] Tests cover: each sort order works, combined with filter, pagination

```

---

## **Key Principles**

✅ **End-to-end per phase**
- Phase doesn't stop at schema
- Phase includes schema + API + UI + tests

✅ **One feature per phase**
- Phase 1: View list
- Phase 2: Filter
- Phase 3: Sort
- Not "Phase 1: backend", "Phase 2: frontend"

✅ **Durable decisions first**
- Routes, schema, models decided upfront
- Won't change in later phases
- Everyone knows the architecture

✅ **Quiz for granularity**
- Too coarse (3 huge phases) = takes too long to see results
- Too fine (15 tiny phases) = overhead for setup each time
- Sweet spot: 3-5 phases per feature

✅ **Acceptance criteria must be testable**
- Not "looks good"
- But "reviews display correctly", "auth check works"

---

## **After Plan is Done**

Check that plan has:
- ✅ Durable architectural decisions (clear for all phases)
- ✅ Multiple vertical slices (not layers)
- ✅ Each phase: end-to-end (schema + API + UI + tests)
- ✅ Acceptance criteria (testable, not subjective)
- ✅ Reasonable granularity (3-5 phases typical)

If good:
→ Go to Skill 5: DO-WORK

If need refinement:
→ Ask Cline to adjust phases

---

## **Next Steps**

1. Have PRD ready (from Skill 2)
2. Copy template to Cline
3. Paste PRD
4. Let Cline create plan
5. Review granularity
6. Approve and get `plans/plan-*.md`
7. Move to Skill 5: DO-WORK for implementation

---

**This plan becomes your roadmap for implementation.**

Each phase = one sprint or work session. Execute in order, validate continuously.
