"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import {
  Users,
  Heart,
  Flag,
  Activity,
  LogOut,
  TrendingUp,
  AlertTriangle,
  CheckCircle,
} from "lucide-react"
import { useRouter } from "next/navigation"
import { useState } from "react"

export default function GovernmentDashboard() {
  const router = useRouter()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  // Static fallback text (since translations removed)
  const t = {
    navigation: "Navigation",
    logout: "Logout",
    populationOverview: "Population Overview",
    diseaseSurveillance: "Disease Surveillance",
    highRiskCamps: "High Risk Camps",
    healthRecords: "Health Records",
    emergencyResponse: "Emergency Response",
    totalRegisteredMigrants: "Total Registered Migrants",
    fromLastMonth: "from last month",
    healthyCamps: "Healthy Camps",
    ofTotalCamps: "of total camps",
    riskFlaggedCamps: "Risk-Flagged Camps",
    requiresAttention: "requires attention",
    activeDiseaseCases: "Active Disease Cases",
    underTreatment: "under treatment",
    keralaHealthStatusMap: "Kerala Health Status Map",
    healthy: "Healthy",
    risingCases: "Rising Cases",
    conditions: "Conditions",
    thriving: "Thriving",
    excellent: "Excellent",
    healthCamp: "Health Camp",
    filterByDistrict: "Filter by District",
    allDistricts: "All Districts",
    thiruvananthapuram: "Thiruvananthapuram",
    kochi: "Kochi",
    kozhikode: "Kozhikode",
    thrissur: "Thrissur",
    originStateAll: "Origin State (All)",
    allStates: "All States",
    odisha: "Odisha",
    westBengal: "West Bengal",
    bihar: "Bihar",
    jharkhand: "Jharkhand",
    quickStatistics: "Quick Statistics",
    newRegistrationsToday: "New Registrations Today",
    healthCheckupsToday: "Health Checkups Today",
    vaccinationCoverage: "Vaccination Coverage",
    emergencyCases: "Emergency Cases",
    medicineDistribution: "Medicine Distribution",
  }

  const menuItems = [
    { label: t.populationOverview, path: "/dashboard/govt", icon: Users },
    { label: t.diseaseSurveillance, path: "/dashboard/govt/disease-surveillance", icon: Activity },
    { label: t.highRiskCamps, path: "/dashboard/govt/high-risk-camps", icon: AlertTriangle },
    { label: t.healthRecords, path: "/dashboard/govt/health-records", icon: Users },
    { label: t.emergencyResponse, path: "/dashboard/govt/emergency-response", icon: AlertTriangle },
  ]

  return (
    <div className="flex-1 flex flex-col">
      {/* Mobile overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-black/50 z-40 md:hidden" onClick={() => setIsMobileMenuOpen(false)} />
      )}

      {/* Mobile Drawer */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg z-50 transform transition-transform duration-300 ease-in-out md:hidden ${
          isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between p-4 border-b">
            <h2 className="text-lg font-semibold text-gray-900">{t.navigation}</h2>
            <button onClick={() => setIsMobileMenuOpen(false)} className="p-1 rounded-md hover:bg-gray-100">
              ✕
            </button>
          </div>

          {/* Drawer Menu */}
          <div className="flex-1 overflow-y-auto p-4">
            <div className="space-y-2">
              {menuItems.map((item, index) => {
                const IconComponent = item.icon
                return (
                  <button
                    key={index}
                    onClick={() => {
                      router.push(item.path)
                      setIsMobileMenuOpen(false)
                    }}
                    className="w-full flex items-center gap-3 px-3 py-3 rounded-lg text-left hover:bg-gray-50 transition-colors"
                  >
                    <IconComponent className="h-5 w-5 text-gray-600" />
                    <span className="text-sm font-medium text-gray-700">{item.label}</span>
                  </button>
                )
              })}
            </div>
          </div>

          <div className="p-4 border-t">
            <Button
              variant="outline"
              size="sm"
              onClick={() => {
                router.push("/")
                setIsMobileMenuOpen(false)
              }}
              className="w-full"
            >
              <LogOut className="h-4 w-4 mr-2" />
              {t.logout}
            </Button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="govt-dashboard-mobile flex-1 p-3 sm:p-4 md:p-6 bg-gray-50 overflow-y-auto">

        {/* Removed LanguageSwitcher */}

        {/* Stats Cards */}
        <div className="stats-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-6 sm:mb-8">
          <Card className="border-l-4 border-l-blue-500">
            <CardContent className="p-4 sm:p-6">
              <div className="flex items-center justify-between mb-3 sm:mb-4">
                <div>
                  <p className="text-xs sm:text-sm text-gray-600 mb-1">{t.totalRegisteredMigrants}</p>
                  <p className="text-2xl sm:text-3xl font-bold">2,47,892</p>
                  <div className="flex items-center gap-1 mt-1">
                    <TrendingUp className="h-3 w-3 text-green-600" />
                    <span className="text-xs text-green-600">{t.fromLastMonth}</span>
                  </div>
                </div>
                <Users className="h-8 w-8 text-blue-500" />
              </div>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-green-500">
            <CardContent className="p-4 sm:p-6">
              <div className="flex items-center justify-between mb-3 sm:mb-4">
                <div>
                  <p className="text-xs sm:text-sm text-gray-600 mb-1">{t.healthyCamps}</p>
                  <p className="text-2xl sm:text-3xl font-bold">156</p>
                  <div className="flex items-center gap-1 mt-1">
                    <CheckCircle className="h-3 w-3 text-green-600" />
                    <span className="text-xs text-green-600">{t.ofTotalCamps}</span>
                  </div>
                </div>
                <Heart className="h-8 w-8 text-green-500" />
              </div>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-yellow-500">
            <CardContent className="p-4 sm:p-6">
              <div className="flex items-center justify-between mb-3 sm:mb-4">
                <div>
                  <p className="text-xs sm:text-sm text-gray-600 mb-1">{t.riskFlaggedCamps}</p>
                  <p className="text-2xl sm:text-3xl font-bold">23</p>
                  <div className="flex items-center gap-1 mt-1">
                    <AlertTriangle className="h-3 w-3 text-yellow-600" />
                    <span className="text-xs text-yellow-600">{t.requiresAttention}</span>
                  </div>
                </div>
                <Flag className="h-8 w-8 text-yellow-500" />
              </div>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-red-500">
            <CardContent className="p-4 sm:p-6">
              <div className="flex items-center justify-between mb-3 sm:mb-4">
                <div>
                  <p className="text-xs sm:text-sm text-gray-600 mb-1">{t.activeDiseaseCases}</p>
                  <p className="text-2xl sm:text-3xl font-bold">1,247</p>
                  <div className="flex items-center gap-1 mt-1">
                    <Activity className="h-3 w-3 text-red-600" />
                    <span className="text-xs text-red-600">{t.underTreatment}</span>
                  </div>
                </div>
                <Activity className="h-8 w-8 text-red-500" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Map + Filters */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle>{t.keralaHealthStatusMap}</CardTitle>
            </CardHeader>
            <CardContent>
              <img
                src="/kerala-show-map.png"
                alt="Kerala"
                className="w-full h-64 object-contain"
              />
            </CardContent>
          </Card>

          {/* Filters */}
          <div className="space-y-4 sm:space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>{t.filterByDistrict}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder={t.allDistricts} />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">{t.allDistricts}</SelectItem>
                    <SelectItem value="thiruvananthapuram">{t.thiruvananthapuram}</SelectItem>
                    <SelectItem value="kochi">{t.kochi}</SelectItem>
                    <SelectItem value="kozhikode">{t.kozhikode}</SelectItem>
                    <SelectItem value="thrissur">{t.thrissur}</SelectItem>
                  </SelectContent>
                </Select>

                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder={t.originStateAll} />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">{t.allStates}</SelectItem>
                    <SelectItem value="odisha">{t.odisha}</SelectItem>
                    <SelectItem value="west-bengal">{t.westBengal}</SelectItem>
                    <SelectItem value="bihar">{t.bihar}</SelectItem>
                    <SelectItem value="jharkhand">{t.jharkhand}</SelectItem>
                  </SelectContent>
                </Select>

                <div className="grid grid-cols-2 gap-2">
                  <Input type="date" />
                  <Input type="date" />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>{t.quickStatistics}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Stat label={t.newRegistrationsToday} value="+127" color="green" />
                <Stat label={t.healthCheckupsToday} value="342" color="blue" />
                <Stat label={t.vaccinationCoverage} value="78.5%" color="purple" />
                <Stat label={t.emergencyCases} value="12" color="red" />
                <Stat label={t.medicineDistribution} value="89.2%" color="orange" />
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

function Stat({ label, value, color }) {
  return (
    <div className="flex justify-between items-center">
      <span className="text-xs sm:text-sm text-gray-600">{label}</span>
      <span className={`font-semibold text-${color}-600 text-sm`}>{value}</span>
    </div>
  )
}
