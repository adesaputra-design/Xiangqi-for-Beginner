# Skill 6: FINAL-CHECKLIST ✅

**Final verification before deploying to production.**

Use after all phases complete. Catches last-minute issues.

---

## **Why Final Checklist?**

Deploying without checklist:
- ❌ Environment variables wrong
- ❌ Database migrations not run
- ❌ Tests passing locally but fail in CI
- ❌ Security vulnerability accidentally pushed
- ❌ Old code still in bundle
- ❌ Monitoring not configured

**Final checklist prevents all of above.**

---

## **When to Use**

After:
- ✅ All phases implemented (do-work complete)
- ✅ All code review feedback addressed
- ✅ Ready to push to production
- ✅ Before deployment button click

**Not use:** During development, only at the end.

---

## **How to Use with Cline**

### **Step 1: Copy Template Below**

### **Step 2: Prepare Info**

Have ready:
- Project name
- Version to deploy
- List of changed files (or git hash)
- Deployment target (staging? prod?)

### **Step 3: Paste to Cline**

```
[COPY ENTIRE PROMPT TEMPLATE BELOW]

[ADD YOUR PROJECT INFO]

[RUN CHECKLIST]
```

Cline will:
1. Run all verification scripts
2. Check each category
3. Flag issues
4. Give final verdict
5. Suggest next steps

---

## **PROMPT TEMPLATE**

Salin-paste ke Cline:

```
Run final deployment checklist untuk project ini.

PROJECT INFO:

Name: [Your project name]
Version: [e.g., 1.0.0, or git hash]
Deployment target: [staging / production]
Changed files/commits: [List or git log --oneline last 5]

---

CHECKLIST CATEGORIES:

## A. BUILD & VALIDATION

- [ ] npm run build (if needed) → succeeds
- [ ] npm typecheck → no errors
- [ ] npm test → all tests pass
- [ ] npm run lint → no errors

## B. ENVIRONMENT & CONFIG

- [ ] All environment variables set correctly
  - Check: .env.production (or config file)
  - Database URL valid
  - API keys present
  - Secrets not in code
  
- [ ] Database ready
  - [ ] Migrations run
  - [ ] Backup taken
  - [ ] Rollback procedure documented

- [ ] No hardcoded values
  - [ ] No localhost/dev URLs in production code
  - [ ] No console.log in critical paths
  - [ ] No debug code left

## C. SECURITY CHECK

- [ ] npm audit → no critical vulnerabilities
- [ ] No secrets in git history
  - Check: git log --all | grep -i password/key/secret
- [ ] No exposed API keys/credentials
- [ ] HTTPS enforced (if web app)
- [ ] CORS configured correctly
- [ ] Input validation present
- [ ] SQL injection protected (if DB)
- [ ] Authentication working

## D. PERFORMANCE

- [ ] Bundle size acceptable
  - Check: npm run build → size output
- [ ] No N+1 queries (if DB-heavy)
- [ ] Database indexes on filter/sort columns
- [ ] Caching configured
- [ ] Load time acceptable (< 3s first load)

## E. MONITORING & LOGS

- [ ] Error tracking configured (Sentry/etc)
- [ ] Monitoring alerts setup
- [ ] Log aggregation ready (if applicable)
- [ ] Health check endpoint exists (if API)
- [ ] Metrics baseline captured (memory, CPU, response time)

## F. DOCUMENTATION & COMMS

- [ ] README updated with new features
- [ ] API docs updated (if API changes)
- [ ] CHANGELOG updated with version
- [ ] Team notified about deployment
- [ ] Runbook updated (how to handle issues)
- [ ] Known issues documented

## G. BACKUP & ROLLBACK

- [ ] Database backup taken
- [ ] Previous version tagged in git
  - git tag v[PREVIOUS_VERSION]
- [ ] Rollback procedure tested
- [ ] Hotfix plan documented
- [ ] Team knows rollback steps

## H. FINAL GO/NO-GO

- [ ] Product Owner approved
- [ ] Tech Lead reviewed
- [ ] QA signed off
- [ ] All checklists above: GREEN ✅
- [ ] No blockers remaining

---

NOW:

Run EVERY check above. For each:
- Show command you ran
- Show output
- Mark ✅ or ⚠️ or 🔴

Format:
✅ Category A: [Status] - [Notes]
⚠️ Category B: [Issue found] - [What to fix]
🔴 Category C: [Critical] - [Must fix before deploy]

After all checks:

## FINAL VERDICT

Status: [READY FOR DEPLOYMENT / NEEDS FIXES / BLOCKED]

Issues found:
🔴 [Critical issues - must fix now]
⚠️ [Warnings - fix before deploy]
✅ [All good]

If READY:
→ You can deploy with confidence
→ Provide rollback procedure

If NEEDS FIXES:
→ Suggest fixes with priority
→ Estimate fix time

If BLOCKED:
→ Something critical broken
→ Don't deploy
→ Fix before re-running checklist

MULAI VERIFICATION!
```

---

## **Example: Real Checklist Run**

**Input:**
```
Project: Review Dashboard v1.0.0
Target: Production
Changed: 5 files (auth route, components, tests)
```

**Output:**

```
## FINAL DEPLOYMENT CHECKLIST: Review Dashboard v1.0.0

### A. BUILD & VALIDATION

✅ npm run build
   Output: Successfully bundled in 12s
   Size: 245 KB (acceptable)

✅ npm typecheck
   Output: No errors

✅ npm test
   Output: 42 tests passed in 8s

✅ npm run lint
   Output: 0 errors, 0 warnings

### B. ENVIRONMENT & CONFIG

✅ Environment variables
   - DATABASE_URL set (prod PostgreSQL)
   - JWT_SECRET set
   - API_BASE_URL: https://api.example.com (production)
   - No hardcoded values found

✅ Database ready
   - Latest migration: v1.4 (2024-06-17)
   - Backup taken: 2024-06-17_backup.sql (5.2 GB)
   - Rollback procedure: documented in RUNBOOK.md

⚠️ Console.log found
   - Found 2 console.log statements in src/auth.ts (debug lines)
   - Fix: Remove debug logs before deploy

### C. SECURITY CHECK

✅ npm audit
   Output: No vulnerabilities

✅ No secrets in history
   Output: Clean (no passwords/keys found)

✅ Git status
   Output: All changes committed, nothing staged

✅ HTTPS enforced
   - All API calls use https://
   - CORS configured for *.example.com only

✅ Authentication working
   - JWT validation functional
   - Permission checks in place

### D. PERFORMANCE

✅ Bundle size: 245 KB (under 300 KB limit)

✅ Database queries
   - Added index on reviews.courseId
   - No N+1 queries identified
   - Worst case query: 200ms (acceptable)

✅ Load time: 1.8s first load (good)

### E. MONITORING & LOGS

✅ Error tracking (Sentry)
   - Project created
   - DSN configured in .env
   - Will capture errors automatically

✅ Health check endpoint
   - GET /health returns 200 with version

⚠️ Metrics baseline not captured
   - Warning: Should capture before deploy
   - Action: Run baseline test, record metrics

### F. DOCUMENTATION & COMMS

✅ README updated
   - New feature "Review Dashboard" documented
   - Setup instructions included

✅ API docs updated
   - New endpoints: GET /api/instructors/:id/reviews
   - OpenAPI spec updated

✅ CHANGELOG updated
   - v1.0.0 entry: "Added instructor review dashboard"

✅ Team notified
   - Slack message sent to #engineering
   - Deployment scheduled for 2 PM UTC

### G. BACKUP & ROLLBACK

✅ Database backup taken
   - Timestamp: 2024-06-17 10:00 UTC
   - Size: 5.2 GB
   - Verified: Restore test successful

✅ Previous version tagged
   - git tag v0.9.9
   - Pushed to origin

✅ Rollback procedure documented
   - RUNBOOK.md section "Rollback v1.0.0"
   - Commands: git revert, restart services, DB restore

### H. FINAL GO/NO-GO

✅ Product Owner approved (Email from PM: "Good to go")
✅ Tech Lead reviewed (Code review: approved)
✅ QA signed off (Test report: all 42 tests passing)

---

## FINAL VERDICT

**Status: ⚠️ CONDITIONAL GO**

### Issues Found:

🔴 **CRITICAL:** None

⚠️ **WARNINGS:**
1. Console.log statements in src/auth.ts (lines 45, 67)
   - Action: Remove debug logs
   - Estimated fix: 5 minutes
   
2. Metrics baseline not captured
   - Action: Optional for v1.0, capture in next release
   - Risk: Can't compare performance metrics later

✅ **All green checks: 18/20**

---

## RECOMMENDATION

**PROCEED** after fixing:
1. Remove console.log (takes 5 min)
2. Re-run linting
3. Deploy

Estimated deployment time: 30 minutes
Estimated rollback time: 15 minutes (if needed)

---

## NEXT STEPS

1. Fix console.log in src/auth.ts
2. Commit: `git commit -m "chore: remove debug logs"`
3. Tag release: `git tag v1.0.0-final`
4. Merge to main
5. CI/CD pipeline deploys automatically
6. Monitor Sentry for 1 hour post-deploy
7. Update status page: "Review Dashboard live"

```

---

## **Checklist Categories Explained**

### **A. Build & Validation**
Ensures code compiles, tests pass, no lint errors.
**Blocker:** Any RED here = can't deploy.

### **B. Environment & Config**
Ensures prod environment is correct, no dev values, secrets secure.
**Blocker:** Wrong database URL, missing secrets.

### **C. Security Check**
Scan for vulnerabilities, exposed secrets, weak auth.
**Blocker:** Critical CVE, exposed API key.

### **D. Performance**
Check bundle size, query performance, load times.
**Blocker:** Usually not, but slow endpoints = bad UX.

### **E. Monitoring & Logs**
Ensure you can see what's happening in prod.
**Blocker:** Can't debug if errors aren't logged.

### **F. Documentation & Comms**
Ensure team knows what's deploying, how to support it.
**Blocker:** Missing runbook = chaos if issues arise.

### **G. Backup & Rollback**
Ensure you can undo if something breaks.
**Blocker:** No backup = data loss risk.

### **H. Final Go/No-Go**
Final sign-off from stakeholders.
**Blocker:** Legal, compliance, business blockers.

---

## **Interpretation**

### **READY FOR DEPLOYMENT** ✅
- All checks GREEN
- No blockers
- Deploy immediately
- Monitor first hour

### **CONDITIONAL GO** ⚠️
- Minor issues found
- Can fix now or in next release
- Fix critical ones before deploy
- Non-critical can wait

### **NEEDS FIXES**
- Multiple issues
- Some critical
- Fix before deploying
- Re-run checklist after fixes

### **BLOCKED** 🔴
- Critical blockers
- Don't deploy
- Fix immediately
- Re-validate after fixes

---

## **After Deployment**

If deployed successfully:

```
DEPLOYMENT COMPLETE ✅

Monitoring checklist (first hour):

- [ ] Health endpoint returns 200
- [ ] Users can access feature
- [ ] No error spikes in Sentry
- [ ] API response times normal
- [ ] Database performance normal
- [ ] No unusual CPU/memory usage

If anything wrong:
→ Run rollback procedure immediately
→ Investigate issue
→ Fix and re-deploy
```

---

## **Checklist is Your Safety Net**

Takes: 30 min to 1 hour  
Prevents: Weeks of production issues  
ROI: Worth it every time

**Use it religiously.**

---

**You're ready to ship.** 🚀
