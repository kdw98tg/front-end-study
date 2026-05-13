import {ref, onMounted, onUnmounted} from 'vue'

// 관례상, 컴포저블 함수 이름은 "use"로 시작합니다.
export function useMouse() {
  // 컴포저블이 캡슐화하고 관리하는 상태
  const x = ref(0)
  const y = ref(0)

  // 컴포저블은 시간이 지남에 따라 관리하는 상태를 업데이트할 수 있습니다.
  function update(event) {
    x.value = event.pageX
    y.value = event.pageY
  }

  // 컴포저블은 소유 컴포넌트의
  // 생명주기에 훅을 걸어 부수 효과를 설정 및 해제할 수 있습니다.
  onMounted(() => window.addEventListener('mousemove', update))
  onUnmounted(() => window.removeEventListener('mousemove', update))

  // 관리하는 상태를 반환값으로 노출
  return { x, y }
}