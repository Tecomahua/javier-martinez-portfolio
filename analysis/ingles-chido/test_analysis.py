import unittest
from analyze import analyze

class AnalysisTest(unittest.TestCase):
    def test_known_counts(self):
        result = analyze()
        self.assertEqual(result['total_attempts'], 24)
        self.assertEqual({x['skill']: (x['correct'], x['attempts'], x['percent']) for x in result['skills']},
                         {'grammar': (5, 8, 62.5), 'listening': (3, 8, 37.5), 'vocabulary': (6, 8, 75.0)})

if __name__ == '__main__':
    unittest.main()
