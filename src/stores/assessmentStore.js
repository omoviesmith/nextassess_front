// src/stores/assessmentStore.js
import { create } from 'zustand';

const useAssessmentStore = create((set) => ({
  assessments: [],
  pagination: {
    total_items: 0,
    items_per_page: 10,
    current_page: 1,
  },
  setAssessments: (data) =>
    set({
      assessments: data.assessments || [],
      pagination: data.pagination || {},
    }),
  setPagination: (paginationData) =>
    set({ pagination: paginationData }),
}));

export default useAssessmentStore;