# Skill 1: IDEA-VALIDATOR-PSME 🔍

**Validate apakah ide layak dibangun SEBELUM invest waktu.**

Gunakan skill ini di awal project baru atau major feature sebelum mulai write-a-prd.

---

## **Why This First?**

Banyak developer habis bulan building feature yang ternyata:
- ❌ Problem tidak benar-benar ada
- ❌ Better solutions sudah tersedia  
- ❌ Market terlalu kecil
- ❌ Execution capability kurang

**Idea-validator catches ini di hari 1, bukan di bulan ke-3.**

---

## **The PSME Framework**

Framework berbasis decision science untuk score ide:

| P | S | M | E |
|---|---|---|---|
| **Problem** (40%) | **Solution** (25%) | **Market** (25%) | **Execution** (10%) |
| Apakah masalahnya nyata & berat? | Apakah solusi benar-benar menyelesaikan? | Apakah ada pasar yang mau bayar? | Apakah tim bisa eksekusi? |

---

## **How to Use with Cline**

### **Step 1: Copy Template Ini**

Salin prompt template di bawah section "PROMPT TEMPLATE" (jangan skip!)

### **Step 2: Prepare Your Idea**

Kumpulkan informasi:
- **Problem statement** (apa masalahnya?)
- **Target user** (siapa yang have this problem?)
- **Proposed solution** (gimana caranya solve?)
- **Validation done** (sudah tanya ke user? ada evidence?)

### **Step 3: Paste to Cline**

```
[COPY ENTIRE PROMPT TEMPLATE BELOW]

[ADD YOUR IDEA INFO]

[EVALUATE!]
```

Cline akan:
1. Ask follow-up questions tentang idea kamu
2. Score setiap dimensi P-S-M-E
3. Check kill switches
4. Give final verdict

### **Step 4: Read Output**

Output akan ada:
- ✅ PSME score breakdown
- ⚡ Kill switch status
- 🪜 Top 3 risks
- ✅ Verdict: Proceed / Conditional / Pivot / Stop

---

## **PROMPT TEMPLATE**

Salin-paste semuanya ke Cline:

```
Saya mau validate idea dengan PSME framework sebelum mulai build.

ABOUT PSME:
- P (Problem Worthiness): 40% weight
  → Severity (pain level 1-10)
  → Frequency (how often 1-10)
  → Solution Gap (current solutions fail? 1-10)
  → Awareness (do people know they have problem? 1-10)

- S (Solution Fit): 25% weight
  → Root cause alignment (solve core problem not symptoms? 1-10)
  → 10x differentiation (10x better than best alternative? 1-10)
  → Mechanism clarity (how does it work? clear? 1-10)
  → Adoption ease (easy to start using? 1-10)

- M (Market Reality): 25% weight
  → Addressable population (how many people? 1-10)
  → Willingness to pay (akan bayar? seberapa? 1-10)
  → Reachability (bisa find & reach them? 1-10)
  → Timing (now the right moment? tech ready? cultural? regulatory? 1-10)

- E (Execution): 10% weight
  → Domain insight (understand space deeply? 1-10)
  → Unfair advantage (network, tech, data, access? 1-10)
  → Resource access (can fund/build MVP? 1-10)
  → Speed to validate (how fast first test? 1-10)

FINAL SCORE: IVFS = (P×0.40) + (S×0.25) + (M×0.25) + (E×0.10)

INTERPRETATION:
- 8-10: STRONG GO
- 6.5-7.9: CONDITIONAL GO
- 5-6.4: PIVOT
- <5: NO GO

KILL SWITCHES (auto-fail regardless of other scores):
- If P < 5 → Problem tidak real
- If P3 < 4 → Better solutions exist
- If S1 < 4 → Solution tidak solve problem

---

IDEA TO VALIDATE:

[PASTE YOUR IDEA HERE]

Problem statement:
[What problem?]

Target user:
[Who? How severe? How often?]

Proposed solution:
[How does it solve?]

Evidence so far:
[Any validation done? Customer talks? Behavioral commitment?]

Your background:
[Why are YOU the right person?]

---

TOLONG:
1. Ask follow-up questions sampai understand deeply
2. Score P-S-M-E sesuai rubrik di atas
3. Check kill switches
4. Give final IVFS score
5. Verdict: Proceed / Conditional / Pivot / Stop
6. Top 3 risks + mitigation
7. If GO → Fastest validation experiment?
8. If NOT GO → Apa yang perlu berubah?

MULAI VALIDASI!
```

---

## **Example: Real Validation**

Saya embed example dari previous validation kamu (Pulih dari Dalam):

**Idea:** Terapi gagap (stutter therapy) program

**Output:**
```
IVFS Score: 8.5 / 10 → STRONG GO

P (Problem): 9/10
- Severity: 9 (significantly impacts confidence & social)
- Frequency: 8 (daily impact untuk many)
- Solution Gap: 8 (current therapy expensive & limited)
- Awareness: 7 (people actively searching for help)
→ Problem Score: 8.2/10 ✅

S (Solution): 7.5/10
- Root cause: 7 (addresses muscle control & breathing)
- 10x better: 7 (cheaper than therapist, accessible)
- Clarity: 8 (clear mechanism for how it works)
- Adoption: 7 (easy to use, fits daily routine)
→ Solution Score: 7.3/10 ✅

M (Market): 8/10
- Population: 7 (millions with stutter globally)
- WTP: 9 (strong pain → willing to pay)
- Reachability: 8 (online, searchable market)
- Timing: 8 (post-pandemic telehealth boom)
→ Market Score: 8.1/10 ✅

E (Execution): 8/10
- Domain: 8 (background in speech therapy)
- Advantage: 8 (novel approach + network)
- Resources: 8 (can bootstrap MVP)
- Speed: 8 (can validate in 2 weeks)
→ Execution Score: 8.0/10 ✅

KILL SWITCHES: PASSED ✅
- P (9.0) > 5 ✅
- P3 (8) > 4 ✅
- S1 (7) > 4 ✅

VERDICT: STRONG GO → Proceed aggressively
```

---

## **Output Format**

Cline will output structured report:

```
## Idea Validation Report: [Your Idea Name]

### PSME Scores

| Dimension | Raw Score | Weight | Weighted |
|-----------|-----------|--------|----------|
| P – Problem | X/10 | 40% | X.X |
| S – Solution | X/10 | 25% | X.X |
| M – Market | X/10 | 25% | X.X |
| E – Execution | X/10 | 10% | X.X |
| **IVFS** | | | **X.X/10** |

### Kill Switch Status
✅ PASSED / ⚡ TRIGGERED

### Problem Analysis
[Detail breakdown of P1-P4]

### Solution Analysis
[Detail breakdown of S1-S4]

### Market Reality
[Detail breakdown of M1-M4]

### Execution Capability
[Detail breakdown of E1-E4]

### Top 3 Risks
1. [Risk] – Mitigation: [How to address]
2. [Risk] – Mitigation: [How to address]
3. [Risk] – Mitigation: [How to address]

### Recommended Next Steps
[If STRONG GO]
1. Fastest validation experiment
2. Key assumption to kill first
3. Who to talk to

[If NOT GO]
What would change the verdict?

### Verdict
**[STRONG GO / CONDITIONAL GO / PIVOT / NO GO]**

**Next action:** [Start write-a-prd / Do more validation / Pivot / Stop]
```

---

## **Keputusan Berdasarkan Verdict**

**STRONG GO (8-10)**
→ Proceed immediately ke write-a-prd skill
→ Confidence level: HIGH

**CONDITIONAL GO (6.5-7.9)**
→ Do quick validation on gap areas
→ Then proceed ke write-a-prd
→ Confidence level: MEDIUM

**PIVOT (5-6.4)**
→ Don't build current solution
→ Re-think problem/market/execution
→ Do more customer talks
→ Build different solution for same problem
→ Confidence level: LOW

**NO GO (<5)**
→ Don't build this now
→ Kill switch triggered = fundamental issue
→ Put on shelf or pivot completely
→ Confidence level: NONE

---

## **Key Principles**

✅ **Score on evidence, not hope**
- "People will pay" (hope) = lower score
- "Talked to 10 people, 7 committed budget" (evidence) = higher score

✅ **Problem dimension drives everything**
- Great solution to weak problem = bad idea
- Weak solution to great problem = better than vice versa

✅ **Kill switches are non-negotiable**
- High scores on S-M-E don't matter if P/S1 fails
- Stop, don't build

✅ **Be honest**
- Most valuable output = truth, not encouragement
- False positive wastes months

---

## **After Validation**

**If STRONG GO / CONDITIONAL GO:**
→ Go to Skill 2: WRITE-A-PRD

**If PIVOT / NO GO:**
→ Don't proceed with write-a-prd
→ Re-think idea
→ Run idea-validator again later

---

**Bottom line:** This skill saves you months of wasted work.

Investment: 1-2 hours now  
Payoff: Avoid building wrong thing
