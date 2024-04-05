import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from '@/components/ui/resizable'

export default function ResizableDemo() {
  return (
    <ResizablePanelGroup
      direction="horizontal"
      className="rounded-base max-w-md border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
    >
      <ResizablePanel defaultSize={50}>
        <div className="flex h-[200px] items-center justify-center bg-main p-6">
          <span className="font-bold">One</span>
        </div>
      </ResizablePanel>
      <ResizableHandle />
      <ResizablePanel defaultSize={50}>
        <ResizablePanelGroup direction="vertical">
          <ResizablePanel defaultSize={25}>
            <div className="flex h-full items-center justify-center bg-main p-6">
              <span className="font-bold">Two</span>
            </div>
          </ResizablePanel>
          <ResizableHandle />
          <ResizablePanel defaultSize={75}>
            <div className="flex h-full items-center justify-center bg-main p-6">
              <span className="font-bold">Three</span>
            </div>
          </ResizablePanel>
        </ResizablePanelGroup>
      </ResizablePanel>
    </ResizablePanelGroup>
  )
}
