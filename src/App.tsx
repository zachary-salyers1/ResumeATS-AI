import React from 'react';
import Header from './components/layout/Header';
import FileUpload from './components/upload/FileUpload';
import JobDescription from './components/analysis/JobDescription';
import AnalysisResult from './components/analysis/AnalysisResult';
import TemplateSelector from './components/templates/TemplateSelector';
import ResumePreview from './components/templates/ResumePreview';
import SavedResumes from './components/resume/SavedResumes';
import { useResumeStore } from './store/useResumeStore';

function App() {
  const { resume, analysisResult } = useResumeStore();

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          {!resume ? (
            <div className="grid grid-cols-1 gap-6">
              <div className="bg-white overflow-hidden shadow rounded-lg">
                <div className="px-4 py-5 sm:p-6">
                  <h2 className="text-lg font-medium text-gray-900 mb-4">Upload Resume</h2>
                  <FileUpload />
                </div>
              </div>
              <SavedResumes />
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              {/* Left Column - Analysis */}
              <div className="lg:col-span-4 space-y-6">
                <JobDescription />
                {analysisResult && <AnalysisResult />}
                <SavedResumes />
              </div>

              {/* Right Column - Resume Preview */}
              <div className="lg:col-span-8 space-y-6">
                <TemplateSelector />
                <ResumePreview resume={resume} />
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}

export default App;