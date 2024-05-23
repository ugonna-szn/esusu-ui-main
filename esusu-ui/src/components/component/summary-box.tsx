
import { Card } from "@/components/ui/card"

interface SummaryBoxProps {
  title: string;
  leftLabel?: string;
  rightLabel?: string;
  value?: string;
  badgeValue?: string;
  leftValue?: string;
  rightValue?: string;
  single?: boolean;
}

export function SummaryBox({
  title,
  leftLabel,
  rightLabel,
  value,
  badgeValue,
  leftValue,
  rightValue,
  single,
}: SummaryBoxProps) {
  return (
    <Card className="w-[18rem] p-4 flex items-center justify-between bg-white shadow-md rounded-lg dark:bg-gray-800">
      <div className="flex items-center space-x-4">
        <div className="bg-gray-100 p-3 rounded-lg dark:bg-gray-700">
          <ActivityIcon className="w-6 h-6 text-gray-500 dark:text-gray-400" />
        </div>
        <div>
          <h3 className="text-gray-500 font-medium h-8 overflow-hidden">{title}</h3>
          <div className="flex items-center space-x-2">
            <span className="font-medium text-2xl h-8 overflow-hidden">{value}</span>
            <span className="bg-green-100 text-green-800 px-2 py-1 rounded-md text-sm font-medium dark:bg-green-900 dark:text-green-100">
              {badgeValue}
            </span>
          </div>
          {single ? (
            <>
              <div className="mt-2">
                <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400">{leftLabel}</h4>
                <div className="flex items-center space-x-2">
                  <span className="text-sm font-semibold text-[#3F562C]">{leftValue}</span>
                </div>
              </div>
            </>
            ) : (
              <>
                <div className="flex items-center space-x-4 mt-2">
                  <div>
                    <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400">{leftLabel}</h4>
                    <div className="flex items-center space-x-2">
                      <span className="text-sm font-semibold text-[#3F562C]">{leftValue}</span>
                    </div>
                  </div>
                  <div className="border-l border-gray-200 dark:border-gray-700 pl-4">
                    <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400">{rightLabel}</h4>
                    <div className="flex items-center space-x-2">
                      <span className="text-sm font-semibold text-[#F24822]">{rightValue}</span>
                    </div>
                  </div>
                </div>
              </>
            )
          }
        </div>
      </div>
    </Card>
  )
}

function ActivityIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2" />
    </svg>
  )
}
