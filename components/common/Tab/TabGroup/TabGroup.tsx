import {
  type ComponentProps,
  useCallback,
  useEffect,
  useState,
  useRef,
} from 'react'
import { TabContext, type TabContextType } from '../context'

interface Props
  extends StrictPropsWithChildren,
    Pick<TabContextType, 'selected'>,
    Omit<ComponentProps<'div'>, 'children' | 'onChange'> {
  onChange?: (value: TabContextType['selected']) => void
  clearDependency?: unknown
}

const TabGroup = ({
  children,
  selected: _selected,
  onChange,
  clearDependency,
  ...rest
}: Props) => {
  const dependency = useRef(clearDependency)
  const [selected, setSelectedTab] = useState(_selected)

  const onChangeSelected = useCallback((value: TabContextType['selected']) => {
    setSelectedTab(value)
    onChange?.(value)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    if (dependency.current !== clearDependency) {
      dependency.current = clearDependency
      onChangeSelected(_selected)
    }
  }, [clearDependency, _selected, onChangeSelected])

  return (
    <TabContext.Provider
      value={{
        selected: dependency.current === clearDependency ? selected : _selected,
        onChange: onChangeSelected,
      }}
    >
      <div {...rest}>{children}</div>
    </TabContext.Provider>
  )
}

export default TabGroup
