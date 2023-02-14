export class ConversationNameHelper {
    static setName(): string {
        if (this.conversation.name != null && this.conversation.name != "") {
            this.name = this.conversation.name;
            return;
          }
      
          if (this.conversation.conversationMembers.length > 0) {
            let user = this.accountService.getUser();
            let conversationMembers = this.conversation.conversationMembers.length > 1
              ? this.conversation.conversationMembers.filter(x => x.userId != user.id)
              : this.conversation.conversationMembers;
      
            this.name = conversationMembers
              .map(x => `${x.user.firstName} ${x.user.lastName}`)
              .join(", ");
          }
    }
}
