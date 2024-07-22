import React from 'react'
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer'
import { getStudents } from '@/lib/actions'

// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    backgroundColor: '#E4E4E4',
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
})

export default async function PDF() {
  const data = await getStudents()
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          {data.map((student) => (
            <Text key={student.id}>{student.id}</Text>
          ))}
          <Text>Section #1</Text>
        </View>
        <View style={styles.section}>
          <Text>Section #2</Text>
        </View>
      </Page>
    </Document>
  )
}
