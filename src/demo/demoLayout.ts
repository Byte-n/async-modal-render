import { StyleSheet } from 'react-native';

export const demoLayout = StyleSheet.create({
  screen: {
    gap: 16,
    padding: 16,
  },
  section: {
    gap: 8,
  },
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
  },
  button: {
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 6,
    backgroundColor: '#2563eb',
  },
  dangerButton: {
    backgroundColor: '#dc2626',
  },
  buttonText: {
    color: '#ffffff',
    fontWeight: '600',
  },
  result: {
    padding: 12,
    borderRadius: 4,
    backgroundColor: '#f0f0f0',
    color: '#334155',
  },
});
