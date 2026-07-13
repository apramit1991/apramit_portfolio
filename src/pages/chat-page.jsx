import { ChatThread } from "@/components/chat/chat-thread";
import { MessageComposer } from "@/components/chat/message-composer";
import { PortfolioShell } from "@/components/chat/portfolio-shell";
import { Sidebar } from "@/components/chat/sidebar";
import { TopUtilityBar } from "@/components/chat/top-utility-bar";
import { usePortfolioChat } from "@/hooks/use-portfolio-chat";
import { useTheme } from "@/hooks/use-theme";

export function ChatPage() {
  const { messages, isTyping, recruiterMode, send, setRecruiterMode, reset } =
    usePortfolioChat();
  const { theme, toggle } = useTheme();

  const handlePrompt = (item) => send(item.label, item.key);

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
      <ChatThread messages={messages} isTyping={isTyping} onPrompt={handlePrompt} />
      <MessageComposer onSend={(text) => send(text)} disabled={isTyping} />
    </PortfolioShell>
  );
}
