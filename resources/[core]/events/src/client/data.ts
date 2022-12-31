/**
 * -- Key is the event we are listening for
 * -- eventTrigger = the trigger event that will be sent when the key event is received. This is a user friendly string.
 * -- dataSize = size of params that are returned
 * -- dataIndexes = the returned data indexes that we want to send to the event listeners
 * ----- List of events can be found at https://github.com/femga/rdr3_discoveries/blob/master/AI/events.lua
 */

export const observedEvents = new Map();

observedEvents.set(GetHashKey('EVENT_LOOT_COMPLETE'), {
  eventTrigger: 'entityGathered',
  dataSize: 3,
  dataIndexes: [0, 2], // ped, entity
  dataFloats: [],
});

observedEvents.set(GetHashKey('EVENT_ENTITY_DESTROYED'), {
  eventTrigger: 'entityKilled',
  dataSize: 9,
  dataIndexes: [2, 0, 4], // killer, killed, weapon
  dataFloats: [],
});

observedEvents.set(GetHashKey('EVENT_ENTITY_DAMAGED'), {
  eventTrigger: 'entityDamaged',
  dataSize: 9,
  dataIndexes: [2, 0, 4, 6], // attacker, attacked, weaponHash, ammoHash
  dataFloats: [12, 14, 16], // x, y, z
});

observedEvents.set(GetHashKey('EVENT_CALM_PED'), {
  eventTrigger: 'horseCalm',
  dataSize: 4,
  dataIndexes: [],
  dataFloats: [],
});

observedEvents.set(GetHashKey('EVENT_PED_ANIMAL_INTERACTION'), {
  eventTrigger: 'interactionEvent',
  dataSize: 3,
  dataIndexes: [2, 4], // entity, interaction
  dataFloats: [],
});

observedEvents.set(GetHashKey('EVENT_PED_WHISTLE'), {
  eventTrigger: 'whistle',
  dataSize: 0,
  dataIndexes: [],
  dataFloats: [],
});

export const eventNames = new Map();

const eventStrings = [
  'EVENT_ACQUAINTANCE_PED_DEAD',
  'EVENT_ACQUAINTANCE_PED_DISGUISE',
  'EVENT_ACQUAINTANCE_PED_DISLIKE',
  'EVENT_ACQUAINTANCE_PED_HATE',
  'EVENT_ACQUAINTANCE_PED_LIKE',
  'EVENT_ACQUAINTANCE_PED_RESPECT',
  'EVENT_ACQUAINTANCE_PED_THIEF',
  'EVENT_ACQUAINTANCE_PED_WANTED',
  'EVENT_AMBIENT_THREAT_LEVEL_MAXED',
  'EVENT_ANIMAL_DETECTED_PREDATOR',
  'EVENT_ANIMAL_DETECTED_PREY',
  'EVENT_ANIMAL_DETECTED_THREAT',
  'EVENT_ANIMAL_DETECTED_TRAIN',
  'EVENT_ANIMAL_PROVOKED',
  'EVENT_ANIMAL_RESPONDED_TO_THREAT',
  'EVENT_ANIMAL_TAMING_CALLOUT',
  'EVENT_ARMED_PED_APPROACHING',
  'EVENT_BEING_LOOTED',
  'EVENT_BOLAS_HIT',
  'EVENT_BUCKED_OFF',
  'EVENT_CALCULATE_LOOT',
  'EVENT_CALL_FOR_BACKUP',
  'EVENT_CALL_FOR_COVER',
  'EVENT_CALM_HORSE',
  'EVENT_CALM_PED',
  'EVENT_CAR_UNDRIVEABLE',
  'EVENT_CARRIABLE_PROMPT_INFO_REQUEST',
  'EVENT_CARRIABLE_UPDATE_CARRY_STATE',
  'EVENT_CARRIABLE_VEHICLE_STOW_COMPLETE',
  'EVENT_CARRIABLE_VEHICLE_STOW_START',
  'EVENT_CATCH_ITEM',
  'EVENT_CHALLENGE_GOAL_COMPLETE',
  'EVENT_CHALLENGE_GOAL_UPDATE',
  'EVENT_CHALLENGE_REWARD',
  'EVENT_CLEAR_PED_TASKS',
  'EVENT_CLIMB_LADDER_ON_ROUTE',
  'EVENT_CLIMB_NAVMESH_ON_ROUTE',
  'EVENT_CLOUD_FILE_RESPONSE',
  'EVENT_COMBAT_TAUNT',
  'EVENT_COMMUNICATE_EVENT',
  'EVENT_CONTAINER_INTERACTION',
  'EVENT_COP_CAR_BEING_STOLEN',
  'EVENT_CRIME_CONFIRMED',
  'EVENT_CRIME_CRY_FOR_HELP',
  'EVENT_CRIME_REPORTED',
  'EVENT_CRIME_WITNESSED',
  'EVENT_CUT_FREE',
  'EVENT_DAILY_CHALLENGE_STREAK_COMPLETED',
  'EVENT_DAMAGE',
  'EVENT_DEAD_PED_FOUND',
  'EVENT_DEATH',
  'EVENT_DEBUG_SETUP_CUTSCENE_WORLD_STATE',
  'EVENT_DISTURBANCE',
  'EVENT_DRAFT_ANIMAL_DETACHED_FROM_VEHICLE',
  'EVENT_DRAGGED_OUT_CAR',
  'EVENT_DUMMY_CONVERSION',
  'EVENT_ENTITY_BROKEN',
  'EVENT_ENTITY_DAMAGED',
  'EVENT_ENTITY_DESTROYED',
  'EVENT_ENTITY_DISARMED',
  'EVENT_ENTITY_EXPLOSION',
  'EVENT_ENTITY_HOGTIED',
  'EVENT_ERRORS_ARRAY_OVERFLOW',
  'EVENT_ERRORS_GLOBAL_BLOCK_INACCESSIBLE',
  'EVENT_ERRORS_GLOBAL_BLOCK_NOT_RESIDENT',
  'EVENT_ERRORS_INSTRUCTION_LIMIT',
  'EVENT_ERRORS_STACK_OVERFLOW',
  'EVENT_ERRORS_UNKNOWN_ERROR',
  'EVENT_EXPLOSION',
  'EVENT_EXPLOSION_HEARD',
  'EVENT_FIRE_NEARBY',
  'EVENT_FLUSH_TASKS',
  'EVENT_FOOT_STEP_HEARD',
  'EVENT_FRIENDLY_AIMED_AT',
  'EVENT_GET_OUT_OF_WATER',
  'EVENT_GET_UP',
  'EVENT_GIVE_PED_TASK',
  'EVENT_GUN_AIMED_AT',
  'EVENT_HEADSHOT_BLOCKED_BY_HAT',
  'EVENT_HEARD_DEAD_PED_COLLISION',
  'EVENT_HELP_AMBIENT_FRIEND',
  'EVENT_HELP_TEXT_REQUEST',
  'EVENT_HITCH_ANIMAL',
  'EVENT_HITCHING_POST',
  'EVENT_HOGTIED',
  'EVENT_HOGTIED_ENTITY_PICKED_UP',
  'EVENT_HORSE_BROKEN',
  'EVENT_HORSE_STARTED_BREAKING',
  'EVENT_IMPENDING_SAMPLE_PROMPT',
  'EVENT_IN_AIR',
  'EVENT_IN_WATER',
  'EVENT_INCAPACITATED',
  'EVENT_INCOMING_THREAT',
  'EVENT_INJURED_CRY_FOR_HELP',
  'EVENT_INJURED_DRIVER',
  'EVENT_INJURED_OWNER',
  'EVENT_INJURED_RIDER',
  'EVENT_INTERACTION',
  'EVENT_INTERACTION_ACTION',
  'EVENT_INVENTORY_ITEM_PICKED_UP',
  'EVENT_INVENTORY_ITEM_REMOVED',
  'EVENT_ITEM_PROMPT_INFO_REQUEST',
  'EVENT_KNOCKEDOUT',
  'EVENT_LASSO_DETACHED',
  'EVENT_LASSO_HIT',
  'EVENT_LASSO_WHIZZED_BY',
  'EVENT_LEADER_ENTERED_CAR_AS_DRIVER',
  'EVENT_LEADER_ENTERED_COVER',
  'EVENT_LEADER_EXITED_CAR_AS_DRIVER',
  'EVENT_LEADER_HOLSTERED_WEAPON',
  'EVENT_LEADER_LEFT_COVER',
  'EVENT_LEADER_UNHOLSTERED_WEAPON',
  'EVENT_LOCKED_DOOR',
  'EVENT_LOOT',
  'EVENT_LOOT_COMPLETE',
  'EVENT_LOOT_PLANT_START',
  'EVENT_LOOT_VALIDATION_FAIL',
  'EVENT_MELEE_ACTION',
  'EVENT_MISS_INTENDED_TARGET',
  'EVENT_MOUNT_DAMAGED_BY_PLAYER',
  'EVENT_MOUNT_OVERSPURRED',
  'EVENT_MOUNT_REACTION',
  'EVENT_MOUNTED_COLLISION',
  'EVENT_MUST_LEAVE_BOAT',
  'EVENT_NEARBY_AMBIENT_THREAT',
  'EVENT_NETWORK_APP_LAUNCHED',
  'EVENT_NETWORK_ATTEMPT_HOST_MIGRATION',
  'EVENT_NETWORK_AWARD_CLAIMED',
  'EVENT_NETWORK_BAIL_DECISION_MADE',
  'EVENT_NETWORK_BAIL_DECISION_PENDING',
  'EVENT_NETWORK_BOUNTY_REQUEST_COMPLETE',
  'EVENT_NETWORK_BULLET_IMPACTED_MULTIPLE_PEDS',
  'EVENT_NETWORK_CASH_TRANSACTION_LOG',
  'EVENT_NETWORK_CASHINVENTORY_DELETE_CHAR',
  'EVENT_NETWORK_CASHINVENTORY_NOTIFICATION',
  'EVENT_NETWORK_CASHINVENTORY_TRANSACTION',
  'EVENT_NETWORK_CHEAT_TRIGGERED',
  'EVENT_NETWORK_CLOUD_EVENT',
  'EVENT_NETWORK_CREW_CREATION',
  'EVENT_NETWORK_CREW_DISBANDED',
  'EVENT_NETWORK_CREW_INVITE_RECEIVED',
  'EVENT_NETWORK_CREW_INVITE_REQUEST_RECEIVED',
  'EVENT_NETWORK_CREW_JOINED',
  'EVENT_NETWORK_CREW_KICKED',
  'EVENT_NETWORK_CREW_LEFT',
  'EVENT_NETWORK_CREW_RANK_CHANGE',
  'EVENT_NETWORK_DAMAGE_ENTITY',
  'EVENT_NETWORK_DEBUG_TOGGLE_MP',
  'EVENT_NETWORK_DRAG_PED',
  'EVENT_NETWORK_DROP_PED',
  'EVENT_NETWORK_EMAIL_RECEIVED',
  'EVENT_NETWORK_EXTENDED_INVITE',
  'EVENT_NETWORK_FRIEND_STATUS_UPDATED',
  'EVENT_NETWORK_FRIENDS_LIST_UPDATED',
  'EVENT_NETWORK_GANG',
  'EVENT_NETWORK_GANG_WAYPOINT_CHANGED',
  'EVENT_NETWORK_HOGTIE_BEGIN',
  'EVENT_NETWORK_HOGTIE_END',
  'EVENT_NETWORK_HOST_MIGRATION',
  'EVENT_NETWORK_HUB_UPDATE',
  'EVENT_NETWORK_INBOX_MSGS_RCVD',
  'EVENT_NETWORK_INCAPACITATED_ENTITY',
  'EVENT_NETWORK_INCREMENT_STAT',
  'EVENT_NETWORK_INVITE_RESPONSE',
  'EVENT_NETWORK_INVITE_RESULT',
  'EVENT_NETWORK_INVITE_UNAVAILABLE',
  'EVENT_NETWORK_IS_VOLUME_EMPTY_RESULT',
  'EVENT_NETWORK_JOIN_REQUEST_TIMED_OUT',
  'EVENT_NETWORK_KNOCKEDOUT_ENTITY',
  'EVENT_NETWORK_LASSO_ATTACH',
  'EVENT_NETWORK_LASSO_DETACH',
  'EVENT_NETWORK_LOOT_CLAIMED',
  'EVENT_NETWORK_MINIGAME_REQUEST_COMPLETE',
  'EVENT_NETWORK_NETWORK_BAIL',
  'EVENT_NETWORK_NETWORK_ROS_CHANGED',
  'EVENT_NETWORK_NOMINATED_GET_UPCOMING_CONTENT_RESPONSE',
  'EVENT_NETWORK_NOMINATED_GO_TO_NEXT_CONTENT_RESPONSE',
  'EVENT_NETWORK_ONLINE_PERMISSIONS_UPDATED',
  'EVENT_NETWORK_PED_DISARMED',
  'EVENT_NETWORK_PED_HAT_SHOT_OFF',
  'EVENT_NETWORK_PED_LEFT_BEHIND',
  'EVENT_NETWORK_PERMISSION_CHECK_RESULT',
  'EVENT_NETWORK_PICKUP_COLLECTION_FAILED',
  'EVENT_NETWORK_PICKUP_RESPAWNED',
  'EVENT_NETWORK_PLATFORM_INVITE_ACCEPTED',
  'EVENT_NETWORK_PLAYER_ARREST',
  'EVENT_NETWORK_PLAYER_COLLECTED_PICKUP',
  'EVENT_NETWORK_PLAYER_COLLECTED_PORTABLE_PICKUP',
  'EVENT_NETWORK_PLAYER_DROPPED_PORTABLE_PICKUP',
  'EVENT_NETWORK_PLAYER_JOIN_SCRIPT',
  'EVENT_NETWORK_PLAYER_JOIN_SESSION',
  'EVENT_NETWORK_PLAYER_LEFT_SCRIPT',
  'EVENT_NETWORK_PLAYER_LEFT_SESSION',
  'EVENT_NETWORK_PLAYER_MISSED_SHOT',
  'EVENT_NETWORK_PLAYER_SIGNED_OFFLINE',
  'EVENT_NETWORK_PLAYER_SIGNED_ONLINE',
  'EVENT_NETWORK_PLAYER_SPAWN',
  'EVENT_NETWORK_POSSE_CREATED',
  'EVENT_NETWORK_POSSE_DATA_CHANGED',
  'EVENT_NETWORK_POSSE_DATA_OR_MEMBERSHIP_CHANGED',
  'EVENT_NETWORK_POSSE_DISBANDED',
  'EVENT_NETWORK_POSSE_EX_ADMIN_DISBANDED',
  'EVENT_NETWORK_POSSE_EX_INACTIVE_DISBANDED',
  'EVENT_NETWORK_POSSE_JOINED',
  'EVENT_NETWORK_POSSE_KICKED',
  'EVENT_NETWORK_POSSE_LEADER_SET_ACTIVE',
  'EVENT_NETWORK_POSSE_LEFT',
  'EVENT_NETWORK_POSSE_MEMBER_DISBANDED',
  'EVENT_NETWORK_POSSE_MEMBER_JOINED',
  'EVENT_NETWORK_POSSE_MEMBER_KICKED',
  'EVENT_NETWORK_POSSE_MEMBER_LEFT',
  'EVENT_NETWORK_POSSE_MEMBER_SET_ACTIVE',
  'EVENT_NETWORK_POSSE_PRESENCE_REQUEST_COMPLETE',
  'EVENT_NETWORK_POSSE_STATS_READ_COMPLETE',
  'EVENT_NETWORK_PRESENCE_EMAIL',
  'EVENT_NETWORK_PRESENCE_STAT_UPDATE',
  'EVENT_NETWORK_PRESENCE_TRIGGER',
  'EVENT_NETWORK_PRIMARY_CREW_CHANGED',
  'EVENT_NETWORK_PROJECTILE_ATTACHED',
  'EVENT_NETWORK_PROJECTILE_NO_DAMAGE_IMPACT',
  'EVENT_NETWORK_REQUEST_DELAY',
  'EVENT_NETWORK_REVIVED_ENTITY',
  'EVENT_NETWORK_ROCKSTAR_INVITE_RECEIVED',
  'EVENT_NETWORK_ROCKSTAR_INVITE_REMOVED',
  'EVENT_NETWORK_SC_FEED_POST_NOTIFICATION',
  'EVENT_NETWORK_SCADMIN_PLAYER_UPDATED',
  'EVENT_NETWORK_SCADMIN_RECEIVED_CASH',
  'EVENT_NETWORK_SCRIPT_EVENT',
  'EVENT_NETWORK_SESSION_EVENT',
  'EVENT_NETWORK_SESSION_MERGE_END',
  'EVENT_NETWORK_SESSION_MERGE_START',
  'EVENT_NETWORK_SIGN_IN_START_NEW_GAME',
  'EVENT_NETWORK_SIGN_IN_STATE_CHANGED',
  'EVENT_NETWORK_SOCIAL_CLUB_ACCOUNT_LINKED',
  'EVENT_NETWORK_SPECTATE_LOCAL',
  'EVENT_NETWORK_SYSTEM_SERVICE_EVENT',
  'EVENT_NETWORK_TIMED_EXPLOSION',
  'EVENT_NETWORK_VEHICLE_LOOTED',
  'EVENT_NETWORK_VEHICLE_UNDRIVABLE',
  'EVENT_NEW_TASK',
  'EVENT_NONE',
  'EVENT_OBJECT_COLLISION',
  'EVENT_OBJECT_INTERACTION',
  'EVENT_ON_FIRE',
  'EVENT_OPEN_DOOR',
  'EVENT_OWNED_ENTITY_INTERACTION',
  'EVENT_PED_ANIMAL_INTERACTION',
  'EVENT_PED_COLLISION_WITH_PED',
  'EVENT_PED_COLLISION_WITH_PLAYER',
  'EVENT_PED_CREATED',
  'EVENT_PED_DESTROYED',
  'EVENT_PED_ENTERED_MY_VEHICLE',
  'EVENT_PED_HAT_KNOCKED_OFF',
  'EVENT_PED_JACKING_MY_VEHICLE',
  'EVENT_PED_ON_VEHICLE_ROOF',
  'EVENT_PED_RAN_OVER_SCRIPT',
  'EVENT_PED_SEEN_DEAD_PED',
  'EVENT_PED_TO_CHASE',
  'EVENT_PED_TO_FLEE',
  'EVENT_PED_WHISTLE',
  'EVENT_PEER_WINDOW',
  'EVENT_PERSCHAR_PED_SPAWNED',
  'EVENT_PICKUP_CARRIABLE',
  'EVENT_PICKUP_SPAWNED',
  'EVENT_PLACE_CARRIABLE_ONTO_PARENT',
  'EVENT_PLAYER_ANTAGONIZED_PED',
  'EVENT_PLAYER_APPROACHED',
  'EVENT_PLAYER_COLLECTED_AMBIENT_PICKUP',
  'EVENT_PLAYER_COLLISION_WITH_PED',
  'EVENT_PLAYER_DEATH',
  'EVENT_PLAYER_DEBUG_TELEPORTED',
  'EVENT_PLAYER_ESCALATED_PED',
  'EVENT_PLAYER_GREETED_PED',
  'EVENT_PLAYER_HAT_EQUIPPED',
  'EVENT_PLAYER_HAT_KNOCKED_OFF',
  'EVENT_PLAYER_HAT_REMOVED_AT_SHOP',
  'EVENT_PLAYER_HORSE_AGITATED_BY_ANIMAL',
  'EVENT_PLAYER_IN_CLOSE_PROXIMITY_TO_HORSE',
  'EVENT_PLAYER_LOCK_ON_TARGET',
  'EVENT_PLAYER_LOOK_FOCUS',
  'EVENT_PLAYER_MOUNT_WILD_HORSE',
  'EVENT_PLAYER_ON_ROOFTOP',
  'EVENT_PLAYER_PROMPT_TRIGGERED',
  'EVENT_PLAYER_ROBBED_PED',
  'EVENT_PLAYER_SIM_UPDATE',
  'EVENT_PLAYER_STRIPPED_WEAPON',
  'EVENT_PLAYER_UNABLE_TO_ENTER_VEHICLE',
  'EVENT_POTENTIAL_BE_WALKED_INTO',
  'EVENT_POTENTIAL_BLAST',
  'EVENT_POTENTIAL_CRIME',
  'EVENT_POTENTIAL_GET_RUN_OVER',
  'EVENT_POTENTIAL_THREAT_APPROACHING',
  'EVENT_POTENTIAL_WALK_INTO_FIRE',
  'EVENT_POTENTIAL_WALK_INTO_OBJECT',
  'EVENT_POTENTIAL_WALK_INTO_VEHICLE',
  'EVENT_PRE_MELEE_KILL',
  'EVENT_PROVIDING_COVER',
  'EVENT_PULLED_FROM_MOUNT',
  'EVENT_RADIO_TARGET_POSITION',
  'EVENT_RAN_OVER_PED',
  'EVENT_REACTION_ANALYSIS_ACTION',
  'EVENT_REACTION_COMBAT_VICTORY',
  'EVENT_REACTION_INVESTIGATE_DEAD_PED',
  'EVENT_REACTION_INVESTIGATE_THREAT',
  'EVENT_RECOVER_AFTER_KNOCKOUT',
  'EVENT_RESPONDED_TO_THREAT',
  'EVENT_REVIVE_ENTITY',
  'EVENT_REVIVED',
  'EVENT_RIDER_DISMOUNTED',
  'EVENT_SADDLE_TRANSFER',
  'EVENT_SCENARIO_ADD_PED',
  'EVENT_SCENARIO_DESTROY_PROP',
  'EVENT_SCENARIO_FORCE_ACTION',
  'EVENT_SCENARIO_RELEASE_BUTTON',
  'EVENT_SCENARIO_REMOVE_PED',
  'EVENT_SCRIPT_COMMAND',
  'EVENT_SEEN_TERRIFIED_PED',
  'EVENT_SHOCKING_ABANDONED_VEHICLE',
  'EVENT_SHOCKING_AUDIBLE_REACTION',
  'EVENT_SHOCKING_BAIT_DROPPED',
  'EVENT_SHOCKING_BAR_BRAWL_ACTION',
  'EVENT_SHOCKING_BEAT_ALARMING',
  'EVENT_SHOCKING_BEAT_ALARMING_NEW',
  'EVENT_SHOCKING_BEAT_AMUSING',
  'EVENT_SHOCKING_BEAT_AMUSING_NEW',
  'EVENT_SHOCKING_BEAT_DANGEROUS',
  'EVENT_SHOCKING_BEAT_DANGEROUS_GO_INSIDE',
  'EVENT_SHOCKING_BEAT_DANGEROUS_GO_INSIDE_NEW',
  'EVENT_SHOCKING_BEAT_DANGEROUS_NEW',
  'EVENT_SHOCKING_BEAT_DISTURBING',
  'EVENT_SHOCKING_BEAT_DISTURBING_NEW',
  'EVENT_SHOCKING_BEAT_INSIGNIFICANT_NEW',
  'EVENT_SHOCKING_BEAT_INTERESTING',
  'EVENT_SHOCKING_BEAT_INTERESTING_NEW',
  'EVENT_SHOCKING_BEAT_SURPRISING',
  'EVENT_SHOCKING_BEAT_SURPRISING_NEW',
  'EVENT_SHOCKING_BEAT_TERRIFYING',
  'EVENT_SHOCKING_BEAT_TERRIFYING_NEW',
  'EVENT_SHOCKING_BICYCLE_CRASH',
  'EVENT_SHOCKING_BICYCLE_ON_PAVEMENT',
  'EVENT_SHOCKING_BREACH_ATTEMPT',
  'EVENT_SHOCKING_CAR_ALARM',
  'EVENT_SHOCKING_CAR_CRASH',
  'EVENT_SHOCKING_CAR_ON_CAR',
  'EVENT_SHOCKING_CAR_PILE_UP',
  'EVENT_SHOCKING_CRIME_SCENE',
  'EVENT_SHOCKING_DANGEROUS_ANIMAL',
  'EVENT_SHOCKING_DEAD_BODY',
  'EVENT_SHOCKING_DISTURBANCE',
  'EVENT_SHOCKING_DOOR_BARGED_OPEN',
  'EVENT_SHOCKING_DOOR_BROKEN',
  'EVENT_SHOCKING_DRIVING_ON_PAVEMENT',
  'EVENT_SHOCKING_ENGINE_REVVED',
  'EVENT_SHOCKING_ENTERED_INTERIOR',
  'EVENT_SHOCKING_ENTITY_HOGTIED',
  'EVENT_SHOCKING_ENTITY_LASSOED',
  'EVENT_SHOCKING_EQUIPPED_MASK',
  'EVENT_SHOCKING_EXPLOSION',
  'EVENT_SHOCKING_FIRE',
  'EVENT_SHOCKING_FISHING_CAST',
  'EVENT_SHOCKING_FLEEING_PED',
  'EVENT_SHOCKING_FLEEING_VEHICLE',
  'EVENT_SHOCKING_GUARD_DOG_BARKING',
  'EVENT_SHOCKING_HELICOPTER_OVERHEAD',
  'EVENT_SHOCKING_HIJACKING',
  'EVENT_SHOCKING_HORN_SOUNDED',
  'EVENT_SHOCKING_HORSE_FLEE_FROM_PLAYER_PROMPT',
  'EVENT_SHOCKING_HORSE_REARED',
  'EVENT_SHOCKING_IN_DANGEROUS_VEHICLE',
  'EVENT_SHOCKING_INJURED_PED',
  'EVENT_SHOCKING_INTERESTING_MELEE_FIGHT',
  'EVENT_SHOCKING_ITEM_STOLEN',
  'EVENT_SHOCKING_LAW_ARRESTING_CRIMINAL',
  'EVENT_SHOCKING_LOCK_PICKED',
  'EVENT_SHOCKING_MAD_DRIVER',
  'EVENT_SHOCKING_MAD_DRIVER_BICYCLE',
  'EVENT_SHOCKING_MAD_DRIVER_EXTREME',
  'EVENT_SHOCKING_MELEE_FIGHT',
  'EVENT_SHOCKING_MOUNT_STOLEN',
  'EVENT_SHOCKING_MUGGING',
  'EVENT_SHOCKING_MULTIKILL',
  'EVENT_SHOCKING_NON_VIOLENT_WEAPON_AIMED_AT',
  'EVENT_SHOCKING_PAIN_VOCALIZATION',
  'EVENT_SHOCKING_PED_DROPPED',
  'EVENT_SHOCKING_PED_ENTERED_COVER',
  'EVENT_SHOCKING_PED_FALLING',
  'EVENT_SHOCKING_PED_JUMP',
  'EVENT_SHOCKING_PED_KNOCKED_INTO_BY_PLAYER',
  'EVENT_SHOCKING_PED_KNOCKED_OUT',
  'EVENT_SHOCKING_PED_LEAPT_TO_TRANSPORT',
  'EVENT_SHOCKING_PED_PLANTING_EXPLOSIVE',
  'EVENT_SHOCKING_PED_RUN_OVER',
  'EVENT_SHOCKING_PED_SCREAMED',
  'EVENT_SHOCKING_PED_SHOT',
  'EVENT_SHOCKING_PED_TIED_BY_BOLAS',
  'EVENT_SHOCKING_PLANE_FLY_BY',
  'EVENT_SHOCKING_PLANTED_EXPLOSIVE',
  'EVENT_SHOCKING_PLAYER_ARRIVAL',
  'EVENT_SHOCKING_PLAYER_CLIMB',
  'EVENT_SHOCKING_PLAYER_CROUCHING',
  'EVENT_SHOCKING_PLAYER_CROUCHING_IN_FOLIAGE_WITH_WEAPON',
  'EVENT_SHOCKING_PLAYER_DUEL',
  'EVENT_SHOCKING_PLAYER_GRIEFING',
  'EVENT_SHOCKING_PLAYER_LAND',
  'EVENT_SHOCKING_PLAYER_POURING_MOONSHINE',
  'EVENT_SHOCKING_PLAYER_RESTING',
  'EVENT_SHOCKING_PLAYER_REVIVED',
  'EVENT_SHOCKING_PLAYER_RUNNING',
  'EVENT_SHOCKING_PLAYER_WITHIN_LOCKDOWN_REGION',
  'EVENT_SHOCKING_POTENTIAL_BLAST',
  'EVENT_SHOCKING_PROPERTY_DAMAGE',
  'EVENT_SHOCKING_PURSUIT',
  'EVENT_SHOCKING_RANSACK',
  'EVENT_SHOCKING_REACTION_TEST_ACTIVE_LOOK',
  'EVENT_SHOCKING_REACTION_TEST_HIGH',
  'EVENT_SHOCKING_REACTION_TEST_LOW',
  'EVENT_SHOCKING_REACTION_TEST_MEDIUM',
  'EVENT_SHOCKING_RUNNING_STAMPEDE',
  'EVENT_SHOCKING_SEEN_CAR_STOLEN',
  'EVENT_SHOCKING_SEEN_CONFRONTATION',
  'EVENT_SHOCKING_SEEN_GANG_FIGHT',
  'EVENT_SHOCKING_SEEN_INSULT',
  'EVENT_SHOCKING_SEEN_MELEE_ACTION',
  'EVENT_SHOCKING_SEEN_NICE_CAR',
  'EVENT_SHOCKING_SEEN_PED_INTIMIDATED',
  'EVENT_SHOCKING_SEEN_PED_KILLED',
  'EVENT_SHOCKING_SEEN_PED_LOOTED',
  'EVENT_SHOCKING_SEEN_PED_ROBBED',
  'EVENT_SHOCKING_SEEN_VEHICLE_TOWED',
  'EVENT_SHOCKING_SEEN_WEAPON_THREAT',
  'EVENT_SHOCKING_SEEN_WEIRD_PED',
  'EVENT_SHOCKING_SEEN_WEIRD_PED_APPROACHING',
  'EVENT_SHOCKING_SHOP_ROBBED',
  'EVENT_SHOCKING_SIREN',
  'EVENT_SHOCKING_SPEECH',
  'EVENT_SHOCKING_STRANGE_OUTFIT',
  'EVENT_SHOCKING_STUDIO_BOMB',
  'EVENT_SHOCKING_SUBMERGED_VEHICLE',
  'EVENT_SHOCKING_THROWN_FROM_HORSE',
  'EVENT_SHOCKING_TOXIC_MOONSHINE',
  'EVENT_SHOCKING_TOXIC_MOONSHINE_CLOUD',
  'EVENT_SHOCKING_TRAIN_WHISTLE',
  'EVENT_SHOCKING_TRESPASSING',
  'EVENT_SHOCKING_UNCONSCIOUS_PED',
  'EVENT_SHOCKING_VISIBLE_LIT_EXPLOSIVE',
  'EVENT_SHOCKING_VISIBLE_REACTION',
  'EVENT_SHOCKING_VISIBLE_WEAPON',
  'EVENT_SHOCKING_WEAPON_DRAWN',
  'EVENT_SHOCKING_WINDOW_SMASHED',
  'EVENT_SHOCKING_WITNESS_CALL_FOR_LAW',
  'EVENT_SHOCKING_WITNESS_REPORTING',
  'EVENT_SHOT_FIRED',
  'EVENT_SHOT_FIRED_BASE',
  'EVENT_SHOT_FIRED_BULLET_IMPACT',
  'EVENT_SHOT_FIRED_WHIZZED_BY',
  'EVENT_SHOT_FIRED_WHIZZED_BY_ENTITY',
  'EVENT_SHOUT_BLOCKING_LOS',
  'EVENT_SHOUT_TARGET_POSITION',
  'EVENT_SHOVE_PED',
  'EVENT_START_CONVERSATION',
  'EVENT_STAT_VALUE_CHANGED',
  'EVENT_STATIC_COUNT_REACHED_MAX',
  'EVENT_STOP_CONVERSATION',
  'EVENT_STUCK_IN_AIR',
  'EVENT_SUSPICIOUS_ACTIVITY',
  'EVENT_SWITCH_2_NM_TASK',
  'EVENT_TEXT_MESSAGE_RECEIVED',
  'EVENT_TRANSITION_TO_HOGTIED',
  'EVENT_TRIGGERED_ANIMAL_WRITHE',
  'EVENT_UI_ITEM_INSPECT_ACTIONED',
  'EVENT_UI_QUICK_ITEM_USED',
  'EVENT_UNIDENTIFIED_PED',
  'EVENT_UNIT_TEST_SCENARIO_EXIT',
  'EVENT_VEHICLE_COLLISION',
  'EVENT_VEHICLE_CREATED',
  'EVENT_VEHICLE_DAMAGE_WEAPON',
  'EVENT_VEHICLE_DESTROYED',
  'EVENT_VEHICLE_ON_FIRE',
  'EVENT_VEHICLE_WAITING_ON_PED_TO_MOVE_AWAY',
  'EVENT_VOICE_CONNECTION_REQUESTED',
  'EVENT_VOICE_CONNECTION_RESPONSE',
  'EVENT_VOICE_CONNECTION_TERMINATED',
  'EVENT_VOICE_SESSION_ENDED',
  'EVENT_VOICE_SESSION_STARTED',
  'EVENT_WAIT_FOR_INTERACTION',
  'EVENT_WHISTLING_HEARD',
  'EVENT_WITHIN_GUN_COMBAT_AREA',
  'EVENT_WITHIN_LAW_RESPONSE_AREA',
  'EVENT_WON_APPROACH_ELECTION',
];

for (const eventString of eventStrings) {
  eventNames.set(GetHashKey(eventString), eventString);
}

/*
EVENT_PICKUP_CARRIABLE
EVENT_PLACE_CARRIABLE_ONTO_PARENT
EVENT_CARRIABLE_VEHICLE_STOW_START
EVENT_CARRIABLE_VEHICLE_STOW_COMPLETE
 */