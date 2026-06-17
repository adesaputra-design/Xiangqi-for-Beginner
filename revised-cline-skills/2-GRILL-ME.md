# Skill 4: GRILL-ME 🔥

**Stress-test your plan/design by relentlessly questioning every decision.**

Used at any point in workflow when you:
- Want to find weak points in design
- Are uncertain about approach
- Want to explore alternatives
- Think something might be wrong but can't articulate it

---

## **Why "Grill"?**

Before building, it's WAY cheaper to find problems by asking hard questions.

After building:
- ❌ Realized the API design was wrong → Refactor 1000 lines
- ❌ Database schema was inflexible → Migrate production data
- ❌ Didn't think about edge cases → Production bugs

**Grill-me catches these in conversation, not in code.**

---

## **When to Use Grill-Me**

### **After Write-A-PRD**
```
"I just wrote PRD for [feature].
Before I start prd-to-plan, grill me on the design."

→ Find assumption gaps early
```

### **After PRD-to-Plan**
```
"I'm not sure about Phase 2 in my plan.
Grill me on whether the vertical slice makes sense."

→ Validate phase breakdown before coding
```

### **During Do-Work**
```
"I'm mid-implementation and hitting a blocker.
Is my approach right? Grill me on the design."

→ Catch wrong direction before going further
```

### **Anytime You're Unsure**
```
"Something feels off about this feature but I can't pinpoint it.
Grill me thoroughly on [aspect]."

→ Make implicit doubts explicit
```

---

## **How Grill-Me Works**

**Simple process:**

1. You paste your plan/design/PRD
2. Cline asks you questions **one at a time**
3. For each question, Cline provides recommended answer
4. You answer, Cline follows up
5. Walk down decision tree until problem identified or confidence boosted

**Key:** One question at a time. Not overwhelming.

---

## **PROMPT TEMPLATE**

Salin-paste ke Cline:

```
Grill me on this design/plan. Walk down the decision tree and find weak spots.

INSTRUCTIONS:
- Ask questions one at a time (not 5 at once)
- For each question, suggest what you think the answer should be
- Help me think through edge cases
- If contradiction found, point it out
- Keep asking until we've covered all major decision branches
- Don't settle for vague answers - push for clarity

HERE IS MY PLAN/DESIGN:

[PASTE YOUR PRD or PLAN or DESIGN HERE]

---

GRILL ME ON:
[Optional: which part specifically? If not specified, grill entire design]

START GRILLING!
```

---

## **Real Example: Grilling A Dashboard Design**

**Input:**
```
Design: Instructor dashboard showing student reviews

Key decisions:
- Reviews load on page load (not lazy load)
- Show 10 reviews per page
- Filter by rating (dropdown)
- Sort by date
- Real-time updates via polling every 30 seconds
```

**Cline grills:**

Q1: "You're loading all 10 reviews on page load. What if an instructor has 10,000 reviews across all courses? Won't that be slow?"
- Recommended answer: "Good point. Maybe add pagination or lazy load?"
- You: "Right, only fetch 10 per page"
- Q2: "But what if instructor scrolls quickly? We load 10, they scroll, 10 more load, then polling triggers and duplicates appear?"
  - Problem identified: Race condition between pagination and polling

Q3: "Why polling every 30 seconds? What's the use case for real-time?"
- Recommended answer: "Maybe students comment and instructor sees immediately?"
- You: "No, just see new reviews"
- Q4: "Then why not just show 'refresh' button instead of polling? Wastes bandwidth."
  - Design improvement: Remove polling, add manual refresh

Q5: "You mentioned filter by rating. What if instructor filters by 5-stars, then a new 1-star review arrives and polling triggers?"
- You: "Oh! The new review won't match the filter, so list stays correct"
- Q6: "And if another instructor is viewing the dashboard, they see same reviews?"
- Shared state implication: May need to document

**Output:**

Weak points found:
1. ❌ No pagination causing potential slowness
2. ❌ Race condition between pagination and polling
3. ❌ Polling unnecessary for this use case → use manual refresh instead

Confidence boosted on:
1. ✅ Filter logic is correct (new reviews respect filter)
2. ✅ Multi-instructor viewing is fine (read-only)

---

## **Grill-Me is NOT**

❌ Brainstorm (come up with ideas)  
❌ Validate (check if good idea)  
❌ Plan (create step-by-step)  
❌ Critique (judge if right or wrong)  

**Grill-Me IS:**
✅ Deep questioning to find weak spots  
✅ Walk decision tree exploring branches  
✅ Surface assumptions  
✅ Identify contradictions  
✅ Build confidence through rigor  

---

## **Principles**

✅ **Ask one question at a time**
- Not: "Is schema right? API design? UI layout?"
- But: "Is schema right?" → explore → then "Is API design right?"

✅ **Suggest recommended answer**
- Helps you think
- You can agree/disagree/nuance
- Moves conversation forward

✅ **Follow every branch**
- If you say "polling every 30 seconds"
- Q: "Why 30? What if 5? What if 60?"
- Q: "What's the worst case scenario?"
- Q: "What if this fails?"

✅ **Push for clarity**
- "Maybe we could..." → too vague
- "We will load reviews on page load, fetch 10 per page, pagination via API param"  → clear

✅ **Surface contradictions**
- You: "Reviews load instantly"
- You: "Also real-time polling"
- Q: "So both? What's the rule - which takes precedence?"

---

## **Example Grilling Questions**

**On Data Design:**
- "Where does [this data] live? Existing table or new?"
- "What happens if [data] is deleted?"
- "How do we query this? Will it be slow at scale?"
- "What's the source of truth if [data] could come from multiple places?"

**On API Design:**
- "What if client sends invalid input to this endpoint?"
- "How does this endpoint behave with 0 results vs 1000 results?"
- "Is this REST-ful? Why (not)?"
- "Who can call this endpoint? How do we enforce that?"

**On Interaction Design:**
- "What if user does [action] twice?"
- "What if user does [action A] then [action B] quickly?"
- "What if [prerequisite] fails silently? Does user know?"
- "How does this work on slow connection?"

**On Edge Cases:**
- "What if data is missing?"
- "What if user has no permission?"
- "What if system is in inconsistent state?"
- "What if external service is down?"

---

## **When to Use vs Skip**

### **Use Grill-Me:**
- ✅ Before implementation (save refactoring time)
- ✅ When you have doubts
- ✅ For high-risk decisions
- ✅ When system has complex interactions
- ✅ When edge cases unclear

### **Skip Grill-Me:**
- ⏭️ Super simple feature (add one field)
- ⏭️ You're extremely confident
- ⏭️ Time-sensitive (need to ship now)
- ⏭️ Following established patterns exactly

---

## **After Grill-Me**

### **If Problems Found:**
- ✅ Update PRD or plan
- ✅ Re-think design aspect
- ✅ Run grill-me again on revised design
- ✅ Then move to do-work

### **If Confidence Boosted:**
- ✅ Design is solid
- ✅ Move to next skill (do-work)
- ✅ Code with confidence

---

## **Expected Output**

After grill-me session, you should have:

1. **Weak points identified** (if any)
2. **Assumptions surfaced** (implicit → explicit)
3. **Edge cases documented** (thought through)
4. **Decision tree explored** (major branches covered)
5. **Confidence level** (high? medium? low?)

---

## **Example Scenarios**

### **Scenario 1: After PRD**
```
User: "I wrote PRD for multi-user chat feature. Grill me."

Q: "How do you handle message ordering if 2 people send simultaneously?"
You: "Hmm, hadn't thought about that..."
Q: "What's your app critical for? Finance? Casual? Affects answer."
You: "Casual. Order doesn't matter as much."
Q: "OK then. What about user A types, disconnects before sending, reconnects? Message stuck?"
You: "Oh! Need to save draft locally"
Q: "Mentioned anywhere in PRD?"
You: "No! Let me add to user stories."

→ PRD improved, design gap found
```

### **Scenario 2: During Do-Work**
```
User: "Implementing Phase 2, but something feels wrong. Grill me on the API design?"

[Paste API endpoint design]

Q: "What if someone calls this endpoint with empty query?"
You: "Returns 0 results"
Q: "No results different from 'no permission' - can user tell the difference?"
You: "Both return 200... that's confusing"
Q: "Maybe 403 for no permission, 200 empty for no results?"
You: "Yes! Let me fix"

→ Bug prevented before shipping
```

### **Scenario 3: Planning Phase**
```
User: "Not sure Phase 2 & 3 are in right order. Grill me?"

[Paste plan with phases]

Q: "Phase 2 needs data from Phase 1?"
You: "Yes, reviews table from Phase 1"
Q: "Phase 3 also needs reviews table?"
You: "Yes"
Q: "Can phases 2 & 3 run in parallel then?"
You: "Oh! They could!"
Q: "Should they? Any dependencies?"
You: "No, independent features"

→ Plan optimized, execution faster
```

---

## **Bottom Line**

**Grill-me is investment in design quality.**

- Cost: 30 min conversation
- Benefit: Avoid 5 hours of rework later

Use it generously before implementation.

---

## **How to Start**

1. Paste your PRD/Plan/Design
2. Copy template above to Cline
3. Let Cline ask questions
4. Answer honestly (don't defend wrong thinking)
5. Document any changes found
6. Update artifact and continue

**The goal isn't to "pass" grilling.**  
**Goal is to find truth before you code.**
