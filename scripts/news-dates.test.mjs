import test from 'node:test';
import assert from 'node:assert/strict';
import { compareNewsDates, formatNewsDate, isRecentNews, newsDateValue, newsYear } from '../app/news-dates.ts';

test('New expires exactly thirty days after publication and never marks future entries', () => {
  const value = '2026-10-20T10:17:39Z';
  const posted = Date.parse(value);
  const month = 30 * 24 * 60 * 60 * 1000;
  assert.equal(isRecentNews(value, posted), true);
  assert.equal(isRecentNews(value, posted + month - 1), true);
  assert.equal(isRecentNews(value, posted + month), false);
  assert.equal(isRecentNews(value, posted - 1), false);
  assert.equal(isRecentNews(value, null), false);
});

test('Date-only entries start at midnight in Hangzhou, independently of visitor timezone', () => {
  assert.equal(newsDateValue('2026-10-21'), Date.parse('2026-10-20T16:00:00Z'));
  assert.equal(isRecentNews('2026-10-21', Date.parse('2026-10-20T15:59:59Z')), false);
  assert.equal(isRecentNews('2026-10-21', Date.parse('2026-10-20T16:00:00Z')), true);
  assert.equal(formatNewsDate('2026-10-20T10:17:39Z'), 'Oct 20, 2026');
});

test('Partial dates never invent a day or receive a New badge', () => {
  const now = Date.parse('2026-10-02T00:00:00Z');
  assert.equal(formatNewsDate('2026'), '2026');
  assert.equal(formatNewsDate('2026-10'), 'Oct 2026');
  assert.equal(isRecentNews('2026', now), false);
  assert.equal(isRecentNews('2026-10', now), false);
});

test('Invalid calendar dates and timestamps without timezones are rejected', () => {
  for (const value of ['2026-13', '2026-02-29', '2026-02-30T12:00:00Z', '2026-10-20T10:00', 'invalid']) {
    assert.equal(newsDateValue(value), null, value);
    assert.equal(isRecentNews(value, Date.now()), false, value);
  }
  assert.notEqual(newsDateValue('2028-02-29'), null);
});

test('Sorting and year grouping agree at the local year boundary', () => {
  assert.equal(newsYear('2026-12-31T20:00:00Z'), '2027');
  const dates = ['2025', '2026-04-12', '2026-10-20T10:17:39Z', '2026-01'];
  assert.deepEqual(dates.map(date => ({date})).sort(compareNewsDates).map(item => item.date), [
    '2026-10-20T10:17:39Z', '2026-04-12', '2026-01', '2025',
  ]);
});
