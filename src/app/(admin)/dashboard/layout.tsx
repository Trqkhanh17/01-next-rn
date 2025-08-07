import AdminContent from "@/components/layout/admin.content";
import AdminFooter from "@/components/layout/admin.footer";
import AdminHeader from "@/components/layout/admin.header";
import AdminSidebar from "@/components/layout/admin.sidebar";
import { Layout } from "antd";


const AdminLayout = ({
    children,
}: Readonly<{
    children: React.ReactNode
}>) => {
    return (
        <>
            <Layout style={{ height: '100vh' }}>
                <AdminSidebar />
                <Layout>
                    <AdminHeader />
                    <AdminContent>
                        {children}
                    </AdminContent>
                    <AdminFooter />
                </Layout>
            </Layout>
            {children}
        </>
    )
}
export default AdminLayout;