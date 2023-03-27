import { ref } from 'vue';

export function useWindowDragover() {
  const isWindowDragover = ref(false);

  const handleDragBegin = (e: DragEvent) => {
    e.preventDefault();
    isWindowDragover.value = true;
  };

  const handleDragEnd = (e: DragEvent) => {
    e.preventDefault();
    isWindowDragover.value = false;
  };

  const addWindowDragoverEventListeners = (window: Window) => {
    window.addEventListener('dragstart', handleDragBegin);
    window.addEventListener('dragenter', handleDragBegin);
    window.addEventListener('dragover', handleDragBegin);
    window.addEventListener('dragleave', handleDragEnd);
    window.addEventListener('dragend', handleDragEnd);
    window.addEventListener('drop', handleDragEnd);
  };

  const removeWindowDragoverEventListeners = (window: Window) => {
    window.removeEventListener('dragstart', handleDragBegin);
    window.removeEventListener('dragenter', handleDragBegin);
    window.removeEventListener('dragover', handleDragBegin);
    window.removeEventListener('dragleave', handleDragEnd);
    window.removeEventListener('dragend', handleDragEnd);
    window.removeEventListener('drop', handleDragEnd);
    isWindowDragover.value = false;
  };

  return {
    isWindowDragover,
    addWindowDragoverEventListeners,
    removeWindowDragoverEventListeners,
  };
}
