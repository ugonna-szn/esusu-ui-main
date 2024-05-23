import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
} from "@/components/ui/alert-dialog"
import { Badge } from "./ui/badge";

interface AlertDialogProps {
  isOpen: boolean;
  onDismiss: () => void;
  transaction: Transaction | null;
}

export const CustomAlertDialog = ({ isOpen, onDismiss, transaction }: AlertDialogProps) => {
  if (!transaction) return null;

  return (
    <AlertDialog open={isOpen}>
        <AlertDialogContent>
          <AlertDialogDescription>
          <div className="max-w-sm mx-auto">
            <div className="bg-[#3F562C] text-white text-center py-6">
              <h2 className="text-2xl font-semibold">Transaction Details</h2>
            </div>
            <div className="bg-white shadow rounded-b-lg py-8 px-6">
              <div className="text-center">
                <h3 className="text-lg font-medium">Amount</h3>
                <p className="text-4xl font-semibold text-[#242424] mt-2">₦10,000</p>
                <Badge className="mt-4 bg-green-500 text-zinc-100" variant="secondary">
                  Successful
                </Badge>
              </div>
              <div className="divide-y divide-gray-200 mt-6">
                <div className="flex justify-between py-4">
                  <div>
                    <h4 className="text-sm font-medium">Sender</h4>
                    <p className="text-sm">JOHN DOE S.</p>
                    <p className="text-sm">ID: 2024SW14</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium">Agent</h4>
                    <p className="text-sm">JOHN DOE S.</p>
                    <p className="text-sm">ID: 2024SW14</p>
                  </div>
                </div>
                <div className="flex justify-between py-4">
                  <div>
                    <h4 className="text-sm font-medium">Date</h4>
                    <p className="text-sm">9, February 2024</p>
                    <p className="text-sm">08:00AM</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium">Transaction ID</h4>
                    <p className="text-sm">#00001ABCDEF</p>
                    {/* <ClipboardIcon className="text-[#1b4332]" /> */}
                  </div>
                </div>
                <div className="flex justify-between py-4">
                  <div>
                    <h4 className="text-sm font-medium">Payment Method</h4>
                    <p className="text-sm">Card</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium">Payment Source</h4>
                    <p className="text-sm">Mobile App</p>
                  </div>
                </div>
              </div>
              <AlertDialogFooter>
                <AlertDialogCancel className="mx-auto" onClick={onDismiss}>Close</AlertDialogCancel>
              </AlertDialogFooter>
            </div>
          </div>
          </AlertDialogDescription>
        </AlertDialogContent>
    </AlertDialog>
  );
};


function ClipboardIcon(props: any) {
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
      <rect width="8" height="4" x="8" y="2" rx="1" ry="1" />
      <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
    </svg>
  )
}
