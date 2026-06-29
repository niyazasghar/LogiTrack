import { Skeleton } from "@/components/ui/skeleton"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function VehicleDetailsLoading() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center gap-2">
        <Skeleton className="h-10 w-32" />
        <Skeleton className="h-10 w-64" />
        <Skeleton className="h-6 w-24" />
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Vehicle Information</CardTitle>
            <Skeleton className="h-4 w-48" />
          </CardHeader>
          <CardContent className="grid gap-4">
            {Array(6).fill(0).map((_, i) => (
              <div key={i} className="flex items-center justify-between border-b pb-2">
                <Skeleton className="h-5 w-32" />
                <Skeleton className="h-5 w-24" />
              </div>
            ))}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Maintenance Schedule</CardTitle>
            <Skeleton className="h-4 w-48" />
          </CardHeader>
          <CardContent className="grid gap-4">
            {Array(3).fill(0).map((_, i) => (
              <div key={i} className="flex items-center justify-between border-b pb-2">
                <Skeleton className="h-5 w-32" />
                <Skeleton className="h-5 w-24" />
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      <div>
        <div className="flex mb-4">
          <Skeleton className="h-10 w-32 mr-2" />
          <Skeleton className="h-10 w-32" />
        </div>
        <Skeleton className="h-[300px] w-full" />
      </div>

      <div className="flex gap-2">
        <Skeleton className="h-10 w-32" />
        <Skeleton className="h-10 w-48" />
      </div>
    </div>
  )
} 