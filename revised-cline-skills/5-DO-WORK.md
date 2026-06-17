# Skill 5: DO-WORK 🛠️

**Execute one phase end-to-end: understand → setup → TDD (backend) / direct (frontend) → validate → commit.**

This is where Deepseek V4 + Cline shines. Build with confidence.

---

## **Before You Start**

Prerequisites:
- ✅ PRD written (Skill 2)
- ✅ Plan created (Skill 3)
- ✅ Optional: Grilled design (Skill 4)
- ✅ Pick one phase to execute

**You're ready to code.**

---

## **Do-Work is NOT**

❌ Code freely and test later  
❌ Build whole feature at once  
❌ Skip validation  
❌ Commit whenever  

**Do-Work IS:**
✅ Plan before coding  
✅ Setup validation tools first  
✅ TDD for backend (red/green/refactor)  
✅ Direct implementation for frontend  
✅ All tests/typecheck passing  
✅ Proper git commits  

---

## **4-Phase Workflow**

### **Phase 1: Understand Task**
- Read plan for this phase
- Explore codebase (understand patterns)
- Clarify ambiguities
- Ask for approval on approach

### **Phase 2: Setup Validation Tools**
- Ensure `package.json` has: typescript, vitest
- Ensure `tsconfig.json` exists
- Run `npm typecheck` → works
- Run `npm test` → works
- NOW you can code safely

### **Phase 3: Implement**
- **Backend:** Red/green/refactor TDD
  - 1 failing test per thin slice
  - Min code to pass
  - Refactor while green
  - Move to next slice
- **Frontend:** Direct implementation
  - Build component
  - Validate in browser
  - Write tests after

### **Phase 4: Validate & Commit**
- `npm typecheck` → all green
- `npm test` → all green
- `npm run lint` → clean
- `git commit` with clear message

---

## **How to Use with Cline**

### **Step 1: Have Plan Ready**

Should have:
- `plans/plan-<feature>.md` from Skill 3
- Phase you want to implement selected
- Acceptance criteria for this phase

### **Step 2: Copy Template Below**

### **Step 3: Paste to Cline**

```
[COPY ENTIRE PROMPT TEMPLATE BELOW]

[PASTE YOUR PLAN with specific phase]

[EXECUTE PHASE]
```

Cline will:
1. Understand task
2. Setup validation tools
3. Implement (TDD for backend)
4. Validate
5. Commit

---

## **PROMPT TEMPLATE**

Salin-paste ke Cline:

```
Tolong implement Phase [N] dari plan ini dengan do-work workflow.

WORKFLOW YANG HARUS DIIKUTI:

## 1. UNDERSTAND TASK

- Read plan acceptance criteria untuk phase ini
- Explore repo untuk understand patterns, conventions
- Identify files yang akan di-modify/create
- Ask me untuk clarify ambiguity
- Show rencana implementation
- Ask approval sebelum mulai code

## 2. SETUP VALIDATION TOOLS

Setup one time (jika belum ada):

a) Check package.json:
   - Add script: "typecheck": "tsc --noEmit"
   - Add script: "test": "vitest run"
   - Add script: "test:watch": "vitest"
   - Ensure dev dependencies: typescript, vitest, @types/node

b) Check tsconfig.json exists with:
   - target: ES2020
   - module: ESNext
   - moduleResolution: bundler
   - strict: true
   - noEmit: true

c) Run validation:
   - npm typecheck → must pass
   - npm test → must pass (or "no test files" is OK)

DO THIS ONCE. If already setup, skip silently.

## 3. IMPLEMENT

### For Backend Code:
Use red/green/refactor TDD (one thin vertical slice at a time):

1. Pick SMALLEST end-to-end behavior slice
2. Write exactly ONE failing test for that slice
3. Run only that test - confirm fails for expected reason (RED)
4. Write MINIMUM code to make test pass (GREEN)
5. Run same test again - confirm passes
6. Refactor if needed while keeping test green
7. ONLY THEN move to next slice

Rules:
- Do NOT write multiple tests upfront
- Do NOT build one layer completely before next
- Do NOT implement future slices
- Each test = one thin vertical slice through system

Example for "show reviews list":
- Test 1: GET /api/reviews returns empty array initially
- Implement 1: Create endpoint, return []
- Test 2: GET /api/reviews returns reviews from database
- Implement 2: Query database, return reviews
- Test 3: GET /api/reviews with ?rating=5 filters results
- Implement 3: Add filter parameter
- [etc]

### For Frontend Code:
Implement directly without TDD:
- Build component
- Style it
- Validate in browser/storybook
- Write tests after

## 4. VALIDATE & COMMIT

Sebelum commit, pastikan:

a) Type checking:
   npm typecheck
   [Output: "No errors" or list of errors]

b) Tests:
   npm test
   [Output: "X tests passed"]

c) If errors:
   - Fix errors
   - Re-run validation
   - Repeat until all green ✅

d) Commit dengan clear message:
   Format: [TYPE] Brief description
   
   [TYPE] options:
   - feat: New feature
   - fix: Bug fix
   - refactor: Code restructure
   - test: Test addition
   - chore: Maintenance
   
   Example:
   feat: add review filtering by rating
   
   - Add ?rating query parameter to GET /reviews
   - Filter reviews in backend
   - Add filter dropdown to UI
   - Add tests for filter logic

---

YOUR PLAN:

[PASTE YOUR PLAN HERE, especially the phase you want to implement]

---

WHICH PHASE TO IMPLEMENT?
[Specify phase, e.g., "Phase 1: Instructor can see review list"]

---

NOW:

1. Understand the task and show me rencana
2. Setup validation tools
3. Implement dengan workflow di atas
4. Show progress frequently
5. Validate dan commit
6. Tell me when phase done

MULAI!
```

---

## **Real Example: Implementing Review List Phase**

**Input Plan Phase:**
```
## Phase 1: Instructor Can See Review List

Acceptance Criteria:
- [ ] GET /api/reviews returns list
- [ ] Reviews include: id, rating, feedback, createdAt, studentName
- [ ] Only instructor can view own reviews (auth check)
- [ ] Empty state shows when no reviews
- [ ] Tests cover: happy path, empty state, auth failure
```

**Cline understands:**
```
Task: Build endpoint + UI for review list
Files to create: src/routes/reviews.ts, src/components/ReviewList.tsx
Files to modify: src/app.ts (add route)
Patterns: RESTful API, React components, Jest tests
Approval request: Should use GET /api/reviews or GET /api/instructors/:id/reviews?

You: "GET /api/instructors/:id/reviews is more specific"

Cline: Noted, will use that pattern.

Rencana:
1. Setup: Add typescript, vitest, tsconfig ✓
2. TDD Backend:
   - Test: GET /api/instructors/:id/reviews returns empty array
   - Implement: Create route, return []
   - Test: Returns reviews from DB
   - Implement: Query DB
   - Test: Auth check - 403 if different instructor
   - Implement: Auth middleware
3. Frontend: Build ReviewList component
4. Validate: typecheck + tests passing
5. Commit: git commit -m "feat: add review list endpoint & UI"

Approve?
```

**Implementation:**

```
[Setup tools]
npm install typescript vitest @types/node
npm typecheck → PASS
npm test → "no test files found" (OK)

[TDD - Test 1]
Create: src/routes/reviews.test.ts

test('GET /api/instructors/:id/reviews returns empty array', async () => {
  const res = await request(app).get('/api/instructors/1/reviews');
  expect(res.status).toBe(200);
  expect(res.body).toEqual([]);
});

npm test → FAILS (expected, route doesn't exist)

[TDD - Implement 1]
Create: src/routes/reviews.ts

app.get('/api/instructors/:id/reviews', (req, res) => {
  res.json([]);
});

npm test → PASSES ✓

[TDD - Test 2]
test('GET /api/instructors/:id/reviews returns reviews from DB', async () => {
  // Setup: insert reviews in test DB
  const res = await request(app).get('/api/instructors/1/reviews');
  expect(res.body).toHaveLength(2);
  expect(res.body[0]).toHaveProperty('rating');
});

npm test → FAILS (hard-coded [] won't pass)

[TDD - Implement 2]
app.get('/api/instructors/:id/reviews', async (req, res) => {
  const reviews = await db.query(
    'SELECT * FROM reviews WHERE instructor_id = ?',
    [req.params.id]
  );
  res.json(reviews);
});

npm test → PASSES ✓

[TDD - Test 3]
test('GET /api/instructors/:id/reviews requires auth', async () => {
  const res = await request(app).get('/api/instructors/2/reviews');
  // If current user is instructor 1, should get 403
  expect(res.status).toBe(403);
});

npm test → FAILS (no auth check)

[TDD - Implement 3]
app.get('/api/instructors/:id/reviews', authenticate, (req, res) => {
  if (req.user.id !== parseInt(req.params.id)) {
    return res.status(403).json({error: 'Forbidden'});
  }
  
  const reviews = await db.query(
    'SELECT * FROM reviews WHERE instructor_id = ?',
    [req.params.id]
  );
  res.json(reviews);
});

npm test → PASSES ✓

[Frontend]
Create: src/components/ReviewList.tsx

export function ReviewList({ instructorId }: Props) {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    fetch(`/api/instructors/${instructorId}/reviews`)
      .then(r => r.json())
      .then(setReviews)
      .finally(() => setLoading(false));
  }, [instructorId]);
  
  if (loading) return <div>Loading...</div>;
  if (reviews.length === 0) return <div>No reviews yet</div>;
  
  return (
    <div>
      {reviews.map(r => (
        <div key={r.id}>
          <strong>{r.studentName}</strong> - {r.rating}⭐
          <p>{r.feedback}</p>
          <small>{new Date(r.createdAt).toLocaleDateString()}</small>
        </div>
      ))}
    </div>
  );
}

[Validate]
npm typecheck → No errors ✓
npm test → 3 tests passed ✓

[Commit]
git add .
git commit -m "feat: add review list endpoint & UI for instructors

- Create GET /api/instructors/:id/reviews endpoint
- Add auth check (403 if not own reviews)
- Add ReviewList React component
- Add 3 tests covering: happy path, empty state, auth failure"
git push

→ PHASE 1 COMPLETE ✅
```

---

## **Key TDD Principles**

### **Red/Green/Refactor**
```
RED:   Write failing test → see fail
       ↓
GREEN: Write min code → test passes
       ↓
REFACTOR: Clean code → test still passes
       ↓
NEXT SLICE: Repeat
```

### **One Test at a Time**
- ❌ Write 10 tests, then implement
- ✅ Write 1 test → implement → test passes → next

### **Min Code to Pass**
- ❌ Over-engineer "to be safe"
- ✅ Exactly what test requires, nothing more

### **Thin Vertical Slices**
- ❌ Phase = "Database layer"
- ✅ Phase = "User can see review list" (schema + API + UI)

---

## **After Phase Complete**

Checklist:
- ✅ All acceptance criteria met
- ✅ `npm typecheck` passes
- ✅ `npm test` passes (all new tests)
- ✅ Code committed with clear message
- ✅ Pushed to repo

**Next phase:** Repeat do-work for Phase 2, Phase 3, etc.

---

## **Progress Tracking**

For a 3-phase plan:

```
Phase 1: ✅ DONE
Phase 2: 🔄 IN PROGRESS
Phase 3: ⏳ PENDING
```

Each phase:
- Takes 1-4 hours typically
- Should be completable in one session
- Result: Working feature, demable

---

## **Common Pitfalls**

❌ **Skip validation tools setup**
→ End up with broken code, hard to debug

❌ **Write too many tests upfront**
→ Tests fail for wrong reasons, implementation unclear

❌ **Implement "for the future"**
→ Over-engineer, waste time, scope creep

❌ **Skip refactor step**
→ Code works but messy, harder to maintain

❌ **Vague git commits**
→ "fix stuff", "update code" - no context for future

✅ **Setup once**
✅ **Test-first per slice**
✅ **Min code to pass**
✅ **Refactor while green**
✅ **Clear commits**

---

## **You're Ready**

- ✅ PRD clear (Skill 2)
- ✅ Plan clear (Skill 3)
- ✅ Design grilled (Skill 4)
- ✅ Do-work process clear (this skill)

**Execute with confidence.**

Each phase you complete = tangible progress, testable feature.

---

**Happy shipping!** 🚀
