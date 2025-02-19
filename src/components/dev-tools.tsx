import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ScrollArea } from "@/components/ui/scroll-area"
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from "@/components/ui/resizable"

export function DevTools() {
  return (
    <div className="h-screen bg-background">
      <ResizablePanelGroup
        direction="vertical"
        className="min-h-screen rounded-lg border"
      >
        <ResizablePanel defaultSize={70}>
          <div className="flex h-full items-center justify-center p-6">
            <span className="font-semibold">Main Content Area</span>
          </div>
        </ResizablePanel>
        <ResizableHandle />
        <ResizablePanel defaultSize={30}>
          <Tabs defaultValue="console" className="w-full">
            <TabsList className="w-full justify-start rounded-none border-b bg-background">
              <TabsTrigger value="console">Console</TabsTrigger>
              <TabsTrigger value="network">Network</TabsTrigger>
              <TabsTrigger value="elements">Elements</TabsTrigger>
              <TabsTrigger value="sources">Sources</TabsTrigger>
            </TabsList>
            <ScrollArea className="h-full">
              <TabsContent value="console" className="m-0 p-4">
                <div className="font-mono">
                  <div className="text-muted-foreground">{'>'} Console output will appear here</div>
                </div>
              </TabsContent>
              <TabsContent value="network" className="m-0 p-4">
                <div className="font-mono">Network requests will be tracked here</div>
              </TabsContent>
              <TabsContent value="elements" className="m-0 p-4">
                <div className="font-mono">DOM elements will be displayed here</div>
              </TabsContent>
              <TabsContent value="sources" className="m-0 p-4">
                <div className="font-mono">Source files will be listed here</div>
              </TabsContent>
            </ScrollArea>
          </Tabs>
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  )
}