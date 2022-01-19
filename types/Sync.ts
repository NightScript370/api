import type { Id } from "./_common.ts"

export type UserSettings = {
    [key: string]: [ number, string ]
}

export type ChannelCompositeKey = {
    channel: Id,
    user: Id
}

export interface ChannelUnread {
    _id: ChannelCompositeKey,

    last_id: string,
    mentions?: string[]
}

export interface WebPushSubscription {
    endpoint: string,
    p256dh: string,
    auth: string,
}
