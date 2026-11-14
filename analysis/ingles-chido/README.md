# Reproducible learning analytics example

`attempts.csv` is a deliberately constructed synthetic fixture: four fictional scenarios, three skills, and two attempts per scenario/skill (24 rows). It contains no real learners, product exports, or measured outcomes. It is designed to exercise the analysis, not represent a population. Repeated attempts are counted individually, so the percentages are attempt accuracy, not learner mastery, retention, or causal effects.

Each row is uniquely identified by scenario, skill, and attempt; `correct` is 1 or 0. The script validates these assumptions, groups rows by skill using pandas, and writes the exact counts and percentages used by the portfolio chart to `src/data/ingles-chido/summary.json`. No SQL or backend integration is implied.

```sh
python -m pip install -r analysis/ingles-chido/requirements.txt
python analysis/ingles-chido/analyze.py
python -m unittest discover -s analysis/ingles-chido -p 'test_*.py'
git diff --exit-code -- src/data/ingles-chido/summary.json
```

Interpretation: listening has 3 correct out of 8 attempts in this constructed example; it shows how to locate a skill for further investigation, not that real learners struggle with listening. A production analysis would require consent, an event schema, quality checks, representative data, and appropriate validation.
