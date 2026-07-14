import { useCallback, useRef } from "react";

import { ChatThread } from "@/components/chat/chat-thread";
import { MessageComposer } from "@/components/chat/message-composer";
import { PortfolioShell } from "@/components/chat/portfolio-shell";
import { Sidebar } from "@/components/chat/sidebar";
import { TopUtilityBar } from "@/components/chat/top-utility-bar";
import { CaseStudyView } from "@/components/case-study/case-study-view";
import { getCaseStudy } from "@/data/case-studies";
import { usePortfolioChat } from "@/hooks/use-portfolio-chat";
import { useRoute } from "@/hooks/use-route";
import { useTheme } from "@/hooks/use-theme";

export function ChatPage() {
  const chat = usePortfolioChat();
  const { theme, toggle } = useTheme();

  // Save the thread's scroll position before entering a case study so
  // "Back to conversation" restores the exact previous spot (spec).
  const threadBoxRef = useRef(null);
  const savedScrollRef = useRef(null);
  const onBeforeNavigate = useCallback((from, to) => {
    if (from.view === "home" && to.view === "case-study") {
      savedScrollRef.current = threadBoxRef.current?.scrollTop ?? null;
    }
  }, []);
  const { route, navigate } = useRoute(onBeforeNavigate);

  const { messages, isTyping, recruiterMode, send, setRecruiterMode, reset } = chat;
  const handlePrompt = (item) => send(item.label, item.key);

  if (route.view === "case-study") {
    return (
      <CaseStudyView
        key={route.slug}
        slug={route.slug}
        data={getCaseStudy(route.slug)}
        chat={chat}
        theme={theme}
        onToggleTheme={toggle}
        onBack={() => navigate("/")}
        onPrompt={handlePrompt}
      />
    );
  }

  return (
    <PortfolioShell
      renderSidebar={(close) => (
        <Sidebar
          disabled={isTyping}
          recruiterMode={recruiterMode}
          onRecruiterToggle={(on) => {
            close();
            setRecruiterMode(on);
          }}
          onPrompt={(item) => {
            close();
            handlePrompt(item);
          }}
          onReset={() => {
            close();
            reset();
          }}
        />
      )}
      renderTopBar={(openMenu) => (
        <TopUtilityBar theme={theme} onThemeToggle={toggle} onMenu={openMenu} />
      )}
    >
      <ChatThread
        messages={messages}
        isTyping={isTyping}
        onPrompt={handlePrompt}
        scrollBoxRef={threadBoxRef}
        initialScrollTop={savedScrollRef.current}
      />
      <MessageComposer onSend={(text) => send(text)} disabled={isTyping} />
    </PortfolioShell>
  );
}
