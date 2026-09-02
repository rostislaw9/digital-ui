import {
  ActivityCard,
  AnalyticsCard,
  ApiKeyCard,
  BillingCard,
  CommandCard,
  DeployCard,
  FeedbackCard,
  IntegrationCard,
  InviteCard,
  LoginCard,
  NewsletterCard,
  NotificationsCard,
  PricingCard,
  ProfileCard,
  SearchCard,
  SecurityCard,
  SettingsCard,
  StatsCard,
  StorageCard,
  TaskCard,
  TeamCard,
  UptimeCard,
  WebhookCard,
} from ".";

const showcaseCards = [
  LoginCard,
  ActivityCard,
  PricingCard,
  StatsCard,
  NewsletterCard,
  AnalyticsCard,
  SettingsCard,
  TeamCard,
  FeedbackCard,
  BillingCard,
  ApiKeyCard,
  DeployCard,
  ProfileCard,
  TaskCard,
  NotificationsCard,
  CommandCard,
  StorageCard,
  UptimeCard,
  SearchCard,
  InviteCard,
  SecurityCard,
  WebhookCard,
  IntegrationCard,
];

// Mobile: split into vertical columns for horizontal scroll.
// 2 columns fully visible + a peek of the 3rd.
const mobileCardsPerColumn = 8;
const mobileColumns = Array.from(
  { length: Math.ceil(showcaseCards.length / mobileCardsPerColumn) },
  (_, i) =>
    showcaseCards.slice(
      i * mobileCardsPerColumn,
      (i + 1) * mobileCardsPerColumn,
    ),
);

export function ShowcaseGrid() {
  return (
    <section className="relative max-h-[calc(100vh-12rem)] overflow-hidden lg:max-h-[calc(100vh-16rem)]">
      {/* Mobile — horizontal columns, 2 visible + peek of 3rd */}
      <div className="flex gap-6 overflow-x-auto pb-4 lg:hidden [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {mobileColumns.map((column, colIdx) => (
          <div key={colIdx} className="flex w-[42vw] shrink-0 flex-col gap-8">
            {column.map((Card, i) => (
              <Card key={i} />
            ))}
          </div>
        ))}
      </div>

      {/* Desktop — masonry columns, section clips overflow with fade */}
      <div className="hidden lg:block">
        <div className="columns-3 gap-8 xl:columns-4 2xl:columns-5">
          {showcaseCards.map((Card, i) => (
            <div
              key={i}
              className="break-inside-avoid pb-8"
              style={{
                contentVisibility: "auto",
                containIntrinsicSize: "300px",
              }}
            >
              <Card />
            </div>
          ))}
        </div>
      </div>

      {/* Bottom fade — gives the feeling of a limitless list */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-background via-background/80 to-transparent" />
    </section>
  );
}
