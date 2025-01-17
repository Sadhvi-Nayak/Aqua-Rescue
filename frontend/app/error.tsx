/**
 * IBM Confidential
 *
 * OCO Source Materials
 * Copyright IBM Corp.  2022
 *
 * The source code for this program is not published or otherwise
 * divested of its trade secrets, irrespective of what has been
 * deposited with the U.S. Copyright Office.
 *
 */
'use client'

import { useEffect } from 'react'
import Exception from '@/common/Exception'
import { AppConst } from '@/constants/app'
import { EXCEPTION_MAP } from '@/constants/exception'

const Error = ({
    error,
}: {
    error: Error
}) => {
    useEffect(() => {
        // Log the error to an error reporting service
        console.error(error)
    }, [error])

    return (
        <Exception
            buttonUrl={AppConst.HOME_PAGE_URL}
            buttonText="Go back home"
            errorCode={500}
            errorStatusText={EXCEPTION_MAP[500].statusText}
            title={EXCEPTION_MAP[500].title}
            subtitle={EXCEPTION_MAP[500].subtitle}
        />
    )
}

export default Error