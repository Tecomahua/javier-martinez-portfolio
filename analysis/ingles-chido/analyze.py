"""Reproduce the synthetic example; never ingest product or personal data."""
from pathlib import Path
import json
import pandas as pd

ROOT = Path(__file__).resolve().parent
OUT = ROOT.parent.parent / 'src/data/ingles-chido/summary.json'

def analyze(path=ROOT / 'attempts.csv'):
    df = pd.read_csv(path)
    assert set(df.columns) == {'scenario_id', 'skill', 'attempt', 'correct'}
    assert not df.isna().any().any()
    assert df['correct'].isin([0, 1]).all() and df['attempt'].isin([1, 2]).all()
    assert not df.duplicated(['scenario_id', 'skill', 'attempt']).any()
    assert set(df['skill']) == {'listening', 'vocabulary', 'grammar'}
    grouped = df.groupby('skill', sort=True)['correct'].agg(['sum', 'count'])
    return {'total_attempts': len(df), 'skills': [
        {'skill': skill, 'correct': int(row['sum']), 'attempts': int(row['count']),
         'percent': round(100 * row['sum'] / row['count'], 1)}
        for skill, row in grouped.iterrows()]}

if __name__ == '__main__':
    result = analyze()
    OUT.write_text(json.dumps(result, indent=2) + '\n', encoding='utf-8')
    print(json.dumps(result, indent=2))
