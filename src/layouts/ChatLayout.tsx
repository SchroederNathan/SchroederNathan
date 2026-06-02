export function ChatLayout() {
  return (
    <div className="layout-chat" data-testid="layout-chat">
      <aside className="chat-threads" aria-label="Conversations">
        <div className="chat-thread chat-thread-active">Team Alpha</div>
        <div className="chat-thread">Design sync</div>
        <div className="chat-thread">Support</div>
      </aside>
      <section className="chat-pane" aria-label="Active conversation">
        <header className="chat-header">Team Alpha</header>
        <div className="chat-messages" role="log" aria-live="polite">
          <div className="chat-bubble chat-bubble-them">Morning!</div>
          <div className="chat-bubble chat-bubble-me">Hey — ready when you are.</div>
          <div className="chat-bubble chat-bubble-them">Great, sharing the doc now.</div>
        </div>
        <footer className="chat-composer">
          <span className="chat-input-placeholder">Message…</span>
        </footer>
      </section>
    </div>
  );
}
