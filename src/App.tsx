import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { HomePage } from "@/pages/HomePage";
import { WorkDetailPage } from "@/pages/WorkDetailPage";
import Cursor from "./components/Cursor";
import { LoadingScreen } from "@/components/LoadingScreen";
import { useCallback, useEffect, useState } from "react";
import SpaceBackground from "./components/SpaceBackground";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // safety: if navigation happens super fast, still clear loader
    const t = window.setTimeout(() => setIsLoading(false), 6000);
    return () => window.clearTimeout(t);
  }, []);

  const handleLoadingDone = useCallback(() => {
    setIsLoading(false);
  }, []);

  return (
    <>
      <Cursor />

      {isLoading && (
        <LoadingScreen minDurationMs={1800} onDone={handleLoadingDone} />
      )}
      <BrowserRouter>
        <SpaceBackground />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/work" element={<HomePage />} />
          <Route path="/contact" element={<HomePage />} />
          <Route path="/projects/:projectId" element={<WorkDetailPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
