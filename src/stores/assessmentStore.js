import create from 'zustand';

const useAssessmentStore = create((set) => ({
  assessments: [],
  setAssessments: (data) => set({ assessments: data }),
}));

export default useAssessmentStore;