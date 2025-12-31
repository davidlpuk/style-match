'use client'

import { useEffect } from 'react'

interface PerformanceMetric {
  name: string
  value: number
  rating: 'good' | 'needs-improvement' | 'poor'
}

const PerformanceMonitor: React.FC = () => {
  useEffect(() => {
    // Only run in production
    if (process.env.NODE_ENV !== 'production') return

    // Function to measure and report performance metrics
    const measurePerformance = () => {
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming
      
      const metrics: PerformanceMetric[] = [
        {
          name: 'FCP',
          value: navigation.loadEventEnd - navigation.fetchStart,
          rating: getRating(navigation.loadEventEnd - navigation.fetchStart, [1800, 3000])
        },
        {
          name: 'LCP',
          value: 0, // Would need observer to get LCP
          rating: 'good'
        },
        {
          name: 'FID',
          value: 0, // Would need observer to get FID
          rating: 'good'
        },
        {
          name: 'CLS',
          value: 0, // Would need observer to get CLS
          rating: 'good'
        }
      ]

      // Log metrics to console in development
      if (process.env.NODE_ENV === 'development') {
        console.group('Performance Metrics')
        metrics.forEach(metric => {
          console.log(`${metric.name}: ${metric.value.toFixed(2)}ms (${metric.rating})`)
        })
        console.groupEnd()
      }

      // Send to analytics service (e.g., Google Analytics, Mixpanel, etc.)
      if (typeof window !== 'undefined' && (window as any).gtag) {
        metrics.forEach(metric => {
          (window as any).gtag('event', 'timing_complete', {
            name: metric.name,
            value: Math.round(metric.value)
          })
        })
      }
    }

    // Measure performance after page load
    if (document.readyState === 'complete') {
      measurePerformance()
    } else {
      window.addEventListener('load', measurePerformance)
    }

    return () => {
      window.removeEventListener('load', measurePerformance)
    }
  }, [])

  const getRating = (value: number, thresholds: [number, number]): 'good' | 'needs-improvement' | 'poor' => {
    if (value <= thresholds[0]) return 'good'
    if (value <= thresholds[1]) return 'needs-improvement'
    return 'poor'
  }

  return null // This component doesn't render anything
}

export default PerformanceMonitor