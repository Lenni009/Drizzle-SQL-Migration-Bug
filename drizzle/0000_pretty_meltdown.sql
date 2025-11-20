CREATE TABLE `users` (
	`user_id` text PRIMARY KEY NOT NULL,
	`token` text
);
--> statement-breakpoint
CREATE UNIQUE INDEX `users_token_unique` ON `users` (`token`);--> statement-breakpoint
CREATE TABLE `vote_data` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`title` text NOT NULL,
	`board` text NOT NULL,
	`is_person_vote` integer NOT NULL,
	`is_secret` integer NOT NULL,
	`has_started` integer DEFAULT false NOT NULL,
	`is_closed` integer DEFAULT false NOT NULL,
	`created_by` text NOT NULL,
	`created_at` integer DEFAULT (unixepoch()) NOT NULL,
	FOREIGN KEY (`created_by`) REFERENCES `users`(`user_id`) ON UPDATE no action ON DELETE no action
);
