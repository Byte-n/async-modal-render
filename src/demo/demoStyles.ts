import { StyleSheet } from 'react-native';

export const demoStyles = StyleSheet.create({
  screen: {
    gap: 12,
    padding: 16,
  },
  panel: {
    gap: 12,
    padding: 16,
    borderRadius: 8,
    backgroundColor: '#ffffff',
  },
  overlay: {
    padding: 16,
    backgroundColor: 'rgba(0, 0, 0, 0.35)',
  },
  modal: {
    gap: 12,
    padding: 16,
    borderRadius: 8,
    backgroundColor: '#ffffff',
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
  },
  body: {
    fontSize: 14,
    lineHeight: 20,
  },
  row: {
    flexDirection: 'row',
    gap: 8,
  },
  button: {
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 6,
    backgroundColor: '#2563eb',
  },
  secondaryButton: {
    backgroundColor: '#64748b',
  },
  dangerButton: {
    backgroundColor: '#dc2626',
  },
  buttonText: {
    color: '#ffffff',
    fontWeight: '600',
  },
  result: {
    fontSize: 14,
    color: '#334155',
  },
});
